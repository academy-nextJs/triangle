"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CodeInput } from "@/components/Shared/CodeInput";

interface VerifyStepProps {
  onNext: () => void;
}

export function VerifyStep({ onNext }: VerifyStepProps) {
  const [timer, setTimer] = useState(40);

  // You can add a useEffect for countdown timer if needed

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">ثبت نام در پیزا</h2>
      <p className="text-center text-gray-600">کد تایید را وارد کنید</p>

      <CodeInput length={5} />

      <p className="text-center text-sm text-gray-500">
        ارسال مجدد کد تا {timer} ثانیه
      </p>

      <Button onClick={onNext} className="w-full">
        ارسال
      </Button>
    </div>
  );
}
