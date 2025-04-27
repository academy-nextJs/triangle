"use client";

import { useState } from "react";
import { LeftSide } from "../Common/LeftSide";
import { EmailStep } from "./components/EmailStep";
import { InfoStep } from "./components/InfroStep";
import { VerifyStep } from "./components/VerifyStep";

export default function RegisterPage() {
  const [step, setStep] = useState(1);

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-gray-50"
      dir="rtl"
    >
      <div className="flex w-screen h-screen p-5 rounded-2xl shadow-lg bg-white overflow-hidden">
        {/* Right side content */}
        <div className="flex flex-col items-center justify-center w-full p-8 md:w-1/2">
          <div className="flex w-3/5  flex-col gap-2">
            <h2 className="text-4xl">Piza</h2>
            <h2 className="text-2xl font-bold ">ثبت نام در پیزا</h2>
          </div>
          {step === 1 && <EmailStep onNext={() => setStep(2)} />}
          {step === 2 && <VerifyStep onNext={() => setStep(3)} />}
          {step === 3 && <InfoStep />}
        </div>

        {/* Left side image */}
        <LeftSide />
      </div>
    </div>
  );
}
