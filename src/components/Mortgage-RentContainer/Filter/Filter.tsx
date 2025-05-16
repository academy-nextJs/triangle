// FilterForm.tsx
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
import { useFilteredHouses } from "@/utils/hooks/useFilteredHouses";
import { useRouter } from "next/navigation"; 

type Filters = {
  yardType: string;
  transactionType: string;
  categorie: string;
  rooms: string;
  bathrooms: string;
  capacity: string;
  minPrice: string;
  parking: string;
  maxPrice: string;
};

type Props = {
  onSubmit?: () => void;
};

export default function FilterForm({ onSubmit }: Props) {
  const [filters, setFilters] = useState<Filters>({
    yardType: "",
    transactionType: "",
    capacity: "",
    categorie: "",
    rooms: "",
    bathrooms: "",
    minPrice: "",
    maxPrice: "",
    parking: "",
  });

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const query = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value) query.append(key, value);
    });

    router.push(`?${query.toString()}`); 
    onSubmit?.(); 
  };

  return (
    <form
      dir="rtl"
      onSubmit={handleSubmit}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-white rounded-md w-full max-w-screen-md mx-auto"
    >
      <div className="w-full">
        <label className="block text-sm font-medium text-gray-800 mb-1 font-[IranYekanRegular]">
          محل مورد نظر
        </label>
        <Select
          dir="rtl"
          name="yardType"
          value={filters.yardType}
          onValueChange={(value) =>
            setFilters((prev) => ({ ...prev, yardType: value }))
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="انتخاب محل" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="شهری">شهری</SelectItem>
            <SelectItem value="با باغ">با باغ</SelectItem>
            <SelectItem value="فضای باز">فضای باز</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-1 font-[IranYekanRegular]">
          حداقل اجاره
        </label>
        <Input
          className="w-full"
          type="number"
          placeholder="مثلاً ۵۰۰۰۰۰۰"
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, capacity: e.target.value }))
          }
        />
      </div>

      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-1 font-[IranYekanRegular]">
          نوع ملک
        </label>
        <Select
          dir="rtl"
          name="categorie"
          value={filters.categorie}
          onValueChange={(value) =>
            setFilters((prev) => ({ ...prev, categorie: value }))
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="انتخاب نوع ملک" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="تهران">تهران</SelectItem>
            <SelectItem value="اصفهان">اصفهان</SelectItem>
            <SelectItem value="شیراز">شیراز</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-1 font-[IranYekanRegular]">
          نوع معامله
        </label>
        <Select
          dir="rtl"
          name="transactionType"
          value={filters.transactionType}
          onValueChange={(value) =>
            setFilters((prev) => ({ ...prev, transactionType: value }))
          }
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
