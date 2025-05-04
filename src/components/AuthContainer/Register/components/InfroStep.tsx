"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import httpClient from "@/utils/services/interceptor/httpClient";

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
    <div className="flex flex-col w-4/5 pt-4 gap-4 space-y-6 px-16">
      <p className="text-gray-600">مشخصات خواسته شده را پر کنید</p>
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col [&>*:nth-child(even)]:mb-3 [&>*:nth-child(even)]:rounded-xl [&>*:nth-child(odd)]:mb-1 [&>*:nth-child(odd)]:pr-1"
        >
          <h3>شماره تماس</h3>
          <Input
            type="tel"
            placeholder="شماره تماس"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />

          <h3>رمزعبور</h3>
          <Input
            type="password"
            placeholder="رمز عبور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <h3>تکرار رمزعبور</h3>
          <Input
            type="password"
            placeholder="تکرار رمز عبور"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

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
