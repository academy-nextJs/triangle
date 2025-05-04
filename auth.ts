import httpClient from "@/utils/services/interceptor/httpClient";
import NextAuth, { User, Session, JWT, Account, Profile } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authConfig = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        try {
          const res = await httpClient.post<{
            accessToken: string;
            refreshToken: string;
          }>("/auth/login", {
            email: credentials?.email,
            password: credentials?.password,
          });
          const { accessToken, refreshToken } = res.data;
          if (accessToken && refreshToken) {
            const payload = JSON.parse(atob(accessToken.split(".")[1]));
            return {
              id: payload.id,
              email: credentials?.email as string | null,
              accessToken,
              refreshToken,
            };
          }
          return null;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({
      token,
      user,
      account,
      profile,
      trigger,
    }: {
      token: JWT;
      user?: User;
      account?: Account | null;
      profile?: Profile;
      trigger?: "signIn" | "signUp" | "update";
    }): Promise<JWT | null> {
      if (user && trigger === "signIn") {
        // On initial login, store tokens and user details
        token.id = user.id;
        token.email = user.email;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        // Decode JWT to get additional user details
        const payload = JSON.parse(atob(user.accessToken.split(".")[1]));
        token.role = payload.role;
        token.name = payload.name;
        token.profilePicture = payload.profilePicture;
      }
      // Check if accessToken is expired
      const payload = JSON.parse(atob(token.accessToken.split(".")[1]));
      const now = Math.floor(Date.now() / 1000);
      if (payload.exp < now) {
        try {
          // Refresh token
          const res = await httpClient.post<{
            accessToken: string;
            refreshToken: string;
          }>("/auth/refresh", {
            refreshToken: token.refreshToken,
          });
          token.accessToken = res.data.accessToken;
          token.refreshToken = res.data.refreshToken || token.refreshToken;
        } catch (error) {
          return { ...token, error: "RefreshTokenError" };
        }
      }
      return token;
    },
    async session({
      session,
      token,
      user,
      trigger,
    }: {
      session: Session;
      token: JWT;
      user?: User;
      trigger?: "signIn" | "signUp" | "update";
    }): Promise<Session | null> {
      if (token.error) {
        return null; // Invalidate session on refresh error
      }
      session.user = {
        id: token.id,
        email: token.email,
        role: token.role,
        name: token.name,
        profilePicture: token.profilePicture,
      };
      session.accessToken = token.accessToken;
      return session;
    },
  },
  events: {
    async signOut({ token }: { token: JWT }) {
      try {
        await httpClient.post("/auth/logout", {
          refreshToken: token.refreshToken,
        });
      } catch (error) {
        console.error("Logout failed:", error);
      }
    },
  },
  session: {
    strategy: "jwt" as const,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: "/login",
    error: "/error",
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
