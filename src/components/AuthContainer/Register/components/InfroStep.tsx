"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function InfoStep() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">ثبت نام در پیزا</h2>
      <p className="text-center text-gray-600">مشخصات خود را تکمیل کنید</p>

      <Input type="text" placeholder="نام و نام خانوادگی" />
      <Input type="password" placeholder="رمز عبور" />
      <Input type="password" placeholder="تکرار رمز عبور" />

      <Button className="w-full">ثبت نام</Button>
    </div>
  );
}
