"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CodeInput } from "@/components/Shared/CodeInput";
import { ClockFading } from "lucide-react";
import httpClient from "@/utils/services/interceptor/httpClient";

interface VerifyStepProps {
  email: string;
  tempUserId: string;
  setError: (error: string) => void;
  onNext: () => void;
}

export function VerifyStep({
  email,
  tempUserId,
  setError,
  onNext,
}: VerifyStepProps) {
  const [code, setCode] = useState("");
  const [timer, setTimer] = useState(120); // 2 minutes in seconds
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await httpClient.post("/auth/verify-email", {
        tempUserId: Number(tempUserId),
        verificationCode: code,
      });
      if (res.data.userId) {
        setError("");
        onNext();
      } else {
        setError("کد تأیید نامعتبر است");
      }
    } catch (error: any) {
      setError(error.response?.data?.message || "خطا در تأیید کد");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    try {
      await httpClient.post("/auth/start-registration", { email });
      setTimer(120);
      setError("");
    } catch (error: any) {
      setError(error.response?.data?.message || "خطا در ارسال مجدد کد");
    }
  };

  return (
    <div className="flex flex-col w-4/5 pt-4 gap-4 space-y-6 lg:px-16">
      <div>
        <p className="text-gray-600 text-sm">
          کد تأیید ارسال شده به {email} را وارد کنید.
        </p>
        <button
          onClick={handleResend}
          disabled={timer > 0}
          className="text-sm underline text-blue-500 disabled:text-gray-400"
        >
          تغییر ایمیل یا ارسال مجدد
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <p className="pr-10">کد تأیید</p>
        <CodeInput
          length={6}
          value={code}
          onChange={(value: string) => setCode(value)}
        />

        <p className="text-center flex text-sm w-20 px-2 mr-9 gap-1 items-center py-1.5 bg-[#586CFF30] rounded-2xl text-[#586CFF]">
          <ClockFading />
          {formatTime(timer)}
        </p>
      </div>

      <Button
        onClick={handleSubmit}
        disabled={loading || code.length !== 6}
        className="w-full rounded-xl bg-[#586CFF]"
      >
        {loading ? "در حال تأیید..." : "ارسال"}
      </Button>
    </div>
  );
}
