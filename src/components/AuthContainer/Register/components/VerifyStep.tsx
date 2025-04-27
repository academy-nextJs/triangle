"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CodeInput } from "@/components/Shared/CodeInput";
import { ClockFading } from "lucide-react";

interface VerifyStepProps {
  onNext: () => void;
}

export function VerifyStep({ onNext }: VerifyStepProps) {
  const [timer, setTimer] = useState(40);

  return (
    <div className="flex flex-col w-4/5 pt-4 gap-4 space-y-6 px-16">
      <div>
        <p className=" text-gray-600 text-sm">
          کد تایید ارسال شده به Example@gmail.com را وارد کنید.
        </p>
        <span className="text-sm underline text-blue-500">تغییر ایمیل</span>
      </div>
      <div className=" flex flex-col gap-2">
        <p className="pr-10">کد تایید</p>
        <CodeInput length={5} />

        <p className="text-center flex text-sm w-20 px-2 mr-9 gap-1 items-center py-1.5 bg-[#586CFF30] rounded-2xl text-[#586CFF]">
          <ClockFading />
          01:20
        </p>
      </div>

      <Button onClick={onNext} className="w-full rounded-xl bg-[#586CFF]">
        ارسال
      </Button>
    </div>
  );
}
