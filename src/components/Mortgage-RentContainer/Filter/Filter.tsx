"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Filters = {
  location?: string;
  propertyType?: string;
  transactionType?: string;
  minRent?: string;
  maxRent?: string;
  minArea?: string;
  maxArea?: string;
};

export default function FilterForm() {
  const [filters, setFilters] = useState<Filters>({});

  const handleChange = (key: keyof Filters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("فیلترها:", filters);
    // بعداً اینجا useQuery با params میاد
  };

  return (
    <form
      dir="rtl"
      onSubmit={handleSubmit}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-white rounded-md w-full max-w-screen-md mx-auto"
    >
      {/* محل مورد نظر */}
      <div className="w-full">
        <label className="block text-sm font-medium text-gray-800 mb-1 font-[IranYekanRegular]">
          محل مورد نظر
        </label>
        <Select
          dir="rtl"
          onValueChange={(value) => handleChange("location", value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="انتخاب محل" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="تهران">تهران</SelectItem>
            <SelectItem value="مشهد">مشهد</SelectItem>
            <SelectItem value="شیراز">شیراز</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* نوع ملک */}
      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-1 font-[IranYekanRegular]">
          نوع ملک
        </label>
        <Select
          dir="rtl"
          onValueChange={(value) => handleChange("propertyType", value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="انتخاب نوع ملک" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="آپارتمانی">آپارتمانی</SelectItem>
            <SelectItem value="ویلایی">ویلایی</SelectItem>
            <SelectItem value="مسکونی">مسکونی</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* نوع معامله */}
      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-1 font-[IranYekanRegular]">
          نوع معامله
        </label>
        <Select
          dir="rtl"
          onValueChange={(value) => handleChange("transactionType", value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="انتخاب نوع معامله" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rental">اجاره</SelectItem>
            <SelectItem value="mortgage">رهن</SelectItem>
            <SelectItem value="direct_purchase">خرید</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* حداقل اجاره */}
      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-1 font-[IranYekanRegular]">
          حداقل اجاره
        </label>
        <Input
          className="w-full"
          type="number"
          placeholder="مثلاً ۵۰۰۰۰۰۰"
          onChange={(e) => handleChange("minRent", e.target.value)}
        />
      </div>

      {/* حداکثر اجاره */}
      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-1 font-[IranYekanRegular]">
          حداکثر اجاره
        </label>
        <Input
          className="w-full"
          type="number"
          placeholder="مثلاً ۲۰۰۰۰۰۰۰"
          onChange={(e) => handleChange("maxRent", e.target.value)}
        />
      </div>

      {/* حداقل متراژ */}
      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-1 font-[IranYekanRegular]">
          حداقل متراژ
        </label>
        <Input
          className="w-full"
          type="number"
          placeholder="مثلاً ۸۰"
          onChange={(e) => handleChange("minArea", e.target.value)}
        />
      </div>

      {/* حداکثر متراژ */}
      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-1 font-[IranYekanRegular]">
          حداکثر متراژ
        </label>
        <Input
          className="w-full"
          type="number"
          placeholder="مثلاً ۲۰۰"
          onChange={(e) => handleChange("maxArea", e.target.value)}
        />
      </div>

      {/* دکمه جست‌وجو */}
      <div className="w-full sm:col-span-2">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition font-[IranYekanRegular]"
        >
          جست‌وجو
        </button>
      </div>
    </form>
  );
}
