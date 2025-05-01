"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function InfoStep() {
  return (
    <div className="flex flex-col w-4/5 pt-4 gap-4 space-y-6 px-16">
      <p className=" text-gray-600">مشخصات خواسته شده را پر کنید</p>
      <div>
        <div className="flex flex-col [&>*:nth-child(even)]:mb-3  [&>*:nth-child(even)]:rounded-xl [&>*:nth-child(odd)]:mb-1 [&>*:nth-child(odd)]:pr-1">
          <h3>شماره تماس</h3>
          <Input type="text" placeholder="نام و نام خانوادگی" />

          <h3>رمزعبور</h3>
          <Input type="password" placeholder="رمز عبور" />

          <h3>تکرار رمزعبور</h3>
          <Input type="password" placeholder="تکرار رمز عبور" />
        </div>

        <Button className="w-full mt-5 rounded-xl bg-[#586CFF]">ثبت نام</Button>
      </div>
    </div>
  );
}
