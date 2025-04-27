"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface EmailStepProps {
  onNext: () => void;
}

export function EmailStep({ onNext }: EmailStepProps) {
  return (
    <div className="flex flex-col gap-5 space-y-6 p-20">
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl">Piza</h2>
        <h2 className="text-2xl font-bold ">ثبت نام در پیزا</h2>
        <p className=" text-gray-600">
          برای ثبت نام در آلفا میتوانید با اکانت گوگل خود و یا با ارسال کد تایید
          به ایمیل خود اقدام کنید
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <Button variant="outline" className="w-full">
          ثبت نام با گوگل
        </Button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400">یا</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <div>
          <h3 className="mb-2">ایمیل</h3>
          <Input type="email" placeholder="ایمیل خود را وارد کنید" />
        </div>
      </div>

      <Button onClick={onNext} className="w-full">
        ادامه
      </Button>
    </div>
  );
}
