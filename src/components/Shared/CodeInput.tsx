"use client";

import { useState } from "react";

interface CodeInputProps {
  length: number;
}

export function CodeInput({ length }: CodeInputProps) {
  const [values, setValues] = useState(Array(length).fill(""));

  const handleChange = (index: number, value: string) => {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
  };

  return (
    <div className="flex justify-center gap-2 rtl:space-x-reverse">
      {values.map((val, idx) => (
        <input
          key={idx}
          type="text"
          maxLength={1}
          className="w-12 h-12 text-center border rounded-md"
          value={val}
          onChange={(e) => handleChange(idx, e.target.value)}
        />
      ))}
    </div>
  );
}
