"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LeftSide } from "../Common/LeftSide";
import { EmailStep } from "./components/EmailStep";
import { VerifyStep } from "./components/VerifyStep";
import { InfoStep } from "./components/InfroStep";
import PizaSvg from "@/components/Svg/PizaSvg";
import ExitAuth from "../Common/ExitAuth";

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [tempUserId, setTempUserId] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-gray-50"
      dir="rtl"
    >
      <div className="flex w-screen h-screen p-5 rounded-2xl shadow-lg dark:bg-gray-950 bg-white overflow-hidden">
        <div className="flex flex-col items-center justify-center w-full xl:p-8 md:w-1/2">
          <div className="flex w-4/6 flex-col gap-2">
            <div className="flex justify-between">
              <PizaSvg />
              <ExitAuth />
            </div>

            <h2 className="text-2xl font-bold">ثبت نام در پیزا</h2>
          </div>
          {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
          {step === 1 && (
            <EmailStep
              email={email}
              setEmail={setEmail}
              setTempUserId={setTempUserId}
              setError={setError}
              onNext={() => setStep(2)}
            />
          )}
          {step === 2 && (
            <VerifyStep
              email={email}
              tempUserId={tempUserId}
              setError={setError}
              onNext={() => setStep(3)}
            />
          )}
          {step === 3 && (
            <InfoStep
              tempUserId={tempUserId}
              setError={setError}
              onComplete={() => router.push("/Login")}
            />
          )}
        </div>

        <LeftSide />
      </div>
    </div>
  );
}
