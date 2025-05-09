"use client";

import TakhfifatCard from "@/components/common/TakhfifatCard/TakhfifatCard";
import { Button } from "@/components/ui/button";

import CountdownTimer from "@/components/ui/CountdownTimer";

const staticCards = [
  {
    title: "آپارتمان لوکس زعفرانیه",
    location: "تهران : زعفرانیه",
    bedCount: 2,
    bathCount: 2,
    capacity: 4,
    price: "۱,۵۰۰,۰۰۰ تومان",
    oldPrice: "۱,۸۰۰,۰۰۰ تومان",
    discount: "۱۵",
  },
  {
    title: "سوئیت دریاچه چیتگر",
    location: "تهران : چیتگر",
    bedCount: 1,
    bathCount: 1,
    capacity: 2,
    price: "۹۰۰,۰۰۰ تومان",
    oldPrice: "۱,۲۰۰,۰۰۰ تومان",
    discount: "۲۵",
  },
  {
    title: "سوئیت دریاچه چیتگر",
    location: "تهران : چیتگر",
    bedCount: 1,
    bathCount: 1,
    capacity: 2,
    price: "۹۰۰,۰۰۰ تومان",
    oldPrice: "۱,۲۰۰,۰۰۰ تومان",
    discount: "۲۵",
  },
];

const Takhfifat = () => {
  return (
    <div className="container mx-auto max-w-7xl p-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mt-[122px] mb-10 px-4">
        <Button
          variant="default"
          className="rounded-2xl bg-[#586CFF] text-white sm:w-[124px] w-[100%] h-[48px] mt-4 sm:mt-0 text-[16px] "
        >
          مشاهده همه
        </Button>
        <div className="flex items-center gap-3 ">
          <CountdownTimer
            targetDate={new Date(Date.now() + 1 * 30 * 90 * 900)}
          />

          <span className="bg-rose-500 text-white  rounded-xl rotate-[-15deg] px-3 pb-1.5 text-[28px] font-bold">
            بهاره
          </span>

          <h2 className="text-[28px] font-bold pb-7 text-slate-800">
            تخفیفات ویژه
          </h2>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {staticCards.map((item, id) => (
          <TakhfifatCard key={id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Takhfifat;
