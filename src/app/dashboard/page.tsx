import { signOut } from "next-auth/react";
import { auth } from "../../../auth";

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user) {
    return <p className="text-center">لطفاً وارد شوید.</p>;
  }
  return (
    <div className="flex min-h-screen items-center justify-center" dir="rtl">
      <div className="text-center">
        <h1 className="text-2xl font-bold">
          خوش آمدید، {session.user.name || "کاربر"}!
        </h1>
        <p>ایمیل: {session.user.email}</p>
        <p>نقش: {session.user.role}</p>
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/auth/login" });
          }}
        >
          <button
            type="submit"
            className="mt-4 rounded-xl bg-red-500 px-4 py-2 text-white"
          >
            خروج
          </button>
        </form>
      </div>
    </div>
  );
}
