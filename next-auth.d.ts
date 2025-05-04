import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    id: string;
    email?: string | null;
    accessToken: string;
    refreshToken: string;
    role?: string | null;
    name?: string | null;
    profilePicture?: string | null;
  }

  interface Session {
    user: {
      id: string;
      email?: string | null;
      role?: string | null;
      name?: string | null;
      profilePicture?: string | null;
    };
    accessToken?: string;
  }

  interface JWT {
    id: string;
    email?: string | null;
    role?: string | null;
    name?: string | null;
    profilePicture?: string | null;
    accessToken: string;
    refreshToken: string;
    error?: string;
  }
}
