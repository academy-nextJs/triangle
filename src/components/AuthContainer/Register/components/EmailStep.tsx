"use client";

import MailSvg from "@/components/Svg/MailSvg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import httpClient from "@/utils/services/interceptor/httpClient";
import Link from "next/link";

interface EmailStepProps {
  email: string;
  setEmail: (email: string) => void;
  setTempUserId: (tempUserId: string) => void;
  setError: (error: string) => void;
  onNext: () => void;
}

export function EmailStep({
  email,
  setEmail,
  setTempUserId,
  setError,
  onNext,
}: EmailStepProps) {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await httpClient.post("/auth/start-registration", { email });
      if (res.data.tempUserId) {
        setTempUserId(res.data.tempUserId);
        setError("");
        onNext();
      } else {
        setError("خطا در ارسال کد تأیید");
      }
    } catch (error: any) {
      setError(error.response?.data?.message || "خطا در ارسال کد تأیید");
    }
  };

  return (
    <div className="flex flex-col w-4/5 gap-4 space-y-6 lg:px-16">
      <p className="text-gray-600 pt-4 dark:text-white">
        برای ثبت نام در آلفا می‌توانید با اکانت گوگل خود و یا با ارسال کد تأیید
        به ایمیل خود اقدام کنید
      </p>

      <div className="flex flex-col font-bold gap-2">
        <Button variant="outline" className="w-full rounded-2xl" disabled>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
              fill="#FFC107"
            />
            <path
              d="M3.15283 7.3455L6.43833 9.755C7.32733 7.554 9.48033 6 11.9998 6C13.5293 6 14.9208 6.577 15.9803 7.5195L18.8088 4.691C17.0228 3.0265 14.6338 2 11.9998 2C8.15883 2 4.82783 4.1685 3.15283 7.3455Z"
              fill="#FF3D00"
            />
            <path
              d="M12.0002 22C14.5832 22 16.9302 21.0115 18.7047 19.404L15.6097 16.785C14.6057 17.5455 13.3577 18 12.0002 18C9.39916 18 7.19066 16.3415 6.35866 14.027L3.09766 16.5395C4.75266 19.778 8.11366 22 12.0002 22Z"
              fill="#4CAF50"
            />
            <path
              d="M21.8055 10.0415H21V10H12V14H17.6515C17.2555 15.1185 16.536 16.083 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
              fill="#1976D2"
            />
          </svg>
          ثبت نام در پیزا با گوگل
        </Button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400">یا</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <h3 className="mb-2">ایمیل</h3>
            <div className="relative">
              <MailSvg />
              <Input
                className="h-10 rounded-xl pr-10"
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="pt-2">
            <Button type="submit" className="w-full rounded-xl bg-[#586CFF]">
              ارسال کد تأیید
            </Button>
            <div className="flex pt-2 justify-center gap-3">
              <span className="text-sm">حساب کاربری دارید؟</span>
              <Link href="/Login" className="text-sm underline text-blue-500">
                ورود به حساب
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
