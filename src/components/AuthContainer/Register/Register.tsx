"use client";

import { useState } from "react";
import { VerifyStep } from "./components/VerifyStep";
import { EmailStep } from "./components/EmailStep";
import { InfoStep } from "./components/InfroStep";

export default function RegisterPage() {
  const [step, setStep] = useState(1);

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-gray-50"
      dir="rtl"
    >
      <div className="flex w-[1440px] h-[752px] p-5  rounded-2xl shadow-lg bg-white overflow-hidden">
        {/* Right side content */}
        <div className="flex items-center justify-center w-full p-8 md:w-1/2">
          {step === 1 && <EmailStep onNext={() => setStep(2)} />}
          {step === 2 && <VerifyStep onNext={() => setStep(3)} />}
          {step === 3 && <InfoStep />}
        </div>
        {/* Left side image */}
        <div
          className="relative hidden md:block md:w-1/2 bg-background rounded-3xl bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/register.png")' }}
        />
        <div>جنگل</div>
      </div>
    </div>
  );
}
