"use client";

import { useState, useEffect } from "react";

interface CodeInputProps {
  length: number;
  value: string;
  onChange: (value: string) => void;
}

export function CodeInput({ length, value, onChange }: CodeInputProps) {
  // Split value into individual digits, padding with empty strings if needed
  const [values, setValues] = useState<string[]>(
    value.split("").concat(Array(length).fill("")).slice(0, length)
  );

  // Sync internal state with prop changes
  useEffect(() => {
    setValues(value.split("").concat(Array(length).fill("")).slice(0, length));
  }, [value, length]);

  const handleChange = (index: number, input: string) => {
    // Allow only one character
    const newValue = input.slice(-1);
    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);

    // Combine values into a single string and call onChange
    const combinedValue = newValues.join("");
    onChange(combinedValue);
  };

  return (
    <div
      className="flex justify-center gap-4 rtl:space-x-reverse"
      style={{ direction: "ltr" }}
    >
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
