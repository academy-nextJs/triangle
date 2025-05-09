"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import httpClient from "@/utils/services/interceptor/httpClient";
import LockSvg from "@/components/Svg/LockSvg";

interface InfoStepProps {
  tempUserId: string;
  setError: (error: string) => void;
  onComplete: () => void;
}

export function InfoStep({ tempUserId, setError, onComplete }: InfoStepProps) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("رمزعبور و تکرار آن مطابقت ندارند");
      return;
    }
    setLoading(true);
    try {
      const res = await httpClient.post("/auth/complete-registration", {
        userId: Number(tempUserId),
        password,
        phoneNumber,
      });
      if (res.data.user) {
        setError("");
        onComplete();
      } else {
        setError("خطا در تکمیل ثبت‌نام");
      }
    } catch (error: any) {
      setError(error.response?.data?.message || "خطا در تکمیل ثبت‌نام");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-4/5 pt-4 gap-4 space-y-6 lg:px-16">
      <p className="text-gray-600">مشخصات خواسته شده را پر کنید</p>
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col [&>*:nth-child(even)]:mb-3 [&>*:nth-child(even)]:rounded-xl [&>*:nth-child(odd)]:mb-1 [&>*:nth-child(odd)]:pr-1"
        >
          <h3>شماره تماس</h3>
          <div className="relative">
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 19H12.01"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.5 2H10.5C8.14298 2 6.96447 2 6.23223 2.73223C5.5 3.46447 5.5 4.64298 5.5 7V17C5.5 19.357 5.5 20.5355 6.23223 21.2678C6.96447 22 8.14298 22 10.5 22H13.5C15.857 22 17.0355 22 17.7678 21.2678C18.5 20.5355 18.5 19.357 18.5 17V7C18.5 4.64298 18.5 3.46447 17.7678 2.73223C17.0355 2 15.857 2 13.5 2Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <Input
              className="h-10 rounded-xl pr-10"
              dir="rtl"
              type="tel"
              placeholder="شماره تماس"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <h3>رمزعبور</h3>
          <div className="relative">
            <LockSvg />
            <Input
              className="h-10 rounded-xl pr-10"
              type="password"
              placeholder="رمز عبور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <h3>تکرار رمزعبور</h3>
          <div className="relative">
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.4082 16.6677C13.4082 16.6677 14.0332 16.6677 14.6582 18.001C14.6582 18.001 16.6435 14.6677 18.4082 14.001"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.9434 7.00098H16.9524"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.9434 7.00098H11.9524"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.94336 7.00098H6.95234"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.89193 11.968H5.00845C3.34693 11.968 2 10.6249 2 8.96802V4.99805C2 3.34119 3.34693 1.99805 5.00845 1.99805H18.9916C20.6531 1.99805 22 3.34119 22 4.99805V9.12895"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.9996 16.001C21.9996 12.6873 19.3057 10.001 15.9827 10.001C12.6597 10.001 9.96582 12.6873 9.96582 16.001C9.96582 19.3147 12.6597 22.001 15.9827 22.001C19.3057 22.001 21.9996 19.3147 21.9996 16.001Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>

            <Input
              className="h-10 rounded-xl pr-10"
              type="password"
              placeholder="تکرار رمز عبور"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full mt-5 rounded-xl bg-[#586CFF]"
          >
            {loading ? "در حال ثبت‌نام..." : "ثبت نام"}
          </Button>
        </form>
      </div>
    </div>
  );
}
