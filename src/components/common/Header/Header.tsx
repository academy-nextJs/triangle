"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import Link from "next/link";
import { useState } from "react";
import { RxCalendar } from "react-icons/rx";
import { ModeToggle } from "../DarkButton/ModeToggle";

// src/app/components/Header.tsx
export default function Header() {
  const [activeTab, setActiveTab] = useState("رزرو ملک");
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [destination, setDestination] = useState<string>("");

  const tabs = ["خرید و فروش", "رهن و اجاره", "رزرو ملک"];
  const destinations = ["تهران", "مشهد", "اصفهان", "شیراز", "تبریز"];
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-center  max-w-7xl mx-auto">
      <div className="flex gap-2 items-center  ml-3 grow-7">
        <Button
          className=" w-[109px] sm:w-[129px] h-[40px] mt-[14px] rounded-2xl bg-[#586CFF]"
          asChild
        >
          <Link href="/Login">ثبت نام و ورود</Link>
        </Button>
        <div className="hidden md:block mt-[14px]">
          <ModeToggle />
        </div>
      </div>
      <div className="w-[228px] h-[21px] grow-7 flex">
        <Button className=" font-bold text-[16px]" variant="link">
          درباره ما
        </Button>
        <Button className=" font-bold text-[16px]" variant="link">
          مقالات
        </Button>
        <Button className=" font-bold text-[16px]" variant="link">
          خانه
        </Button>
      </div>

      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button
            className="lg:hidden mr-2 bg-[#586CFF] mt-3"
            onClick={() => setOpen(true)}
          >
            فیلتر
          </Button>
        </DrawerTrigger>

        <DrawerContent className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-sm">
          <div className="rounded-xl p-8 w-[90%] max-w-xl ">
            <div className=" bg-white dark:bg-[#020618] rounded-2xl shadow-md p-4 md:p-6 justify-center flex flex-wrap gap-6">
              {/* Tabs */}
              <div className="flex gap-4 justify-center pt-[1px] pr-0 md:pr-8 flex-wrap">
                {tabs.map((tab) => (
                  <div key={tab} className="flex flex-wrap items-center">
                    <div
                      className={`h-1.5 w-full rounded-b-lg ${
                        activeTab === tab ? "bg-blue-600" : "bg-transparent"
                      } transition-all`}
                    />
                    <button
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 text-[16px] dark:text-gray-200  font-medium bg-white dark:bg-[#020618] transition-all ${
                        activeTab === tab
                          ? "text-blue-600 bg-blue-100"
                          : "text-gray-600 bg-gray-100"
                      }`}
                    >
                      {tab}
                    </button>
                  </div>
                ))}
              </div>

              {/* Form Fields */}
              <div className="flex flex-wrap gap-4 md:gap-6 items-center justify-center ">
                {/* تاریخ خروج */}
                <div className="flex items-center gap-2 relative">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-[162px] h-[48px] justify-start pl-10 pr-3 relative text-gray-400 dark:text-gray-200"
                      >
                        <RxCalendar className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-200" />
                        <span className="text-[14px]">
                          {endDate
                            ? format(endDate, "yyyy/MM/dd")
                            : "انتخاب تاریخ"}
                        </span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={endDate}
                        onSelect={setEndDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <label className="text-gray-700 dark:text-gray-200 text-[14px] font-medium min-w-max">
                    :تاریخ خروج
                  </label>
                </div>

                {/* تاریخ ورود */}
                <div className="flex items-center gap-2 relative">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-[162px] h-[48px] justify-start pl-10 pr-3 relative text-gray-400 dark:text-gray-200"
                      >
                        <RxCalendar className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-200" />
                        <span className="text-[14px] text-right">
                          {startDate
                            ? format(startDate, "yyyy/MM/dd")
                            : "انتخاب تاریخ"}
                        </span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={startDate}
                        onSelect={setStartDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <label className="text-gray-700 text-[14px] font-medium min-w-max dark:text-gray-200">
                    :تاریخ ورود
                  </label>
                </div>

                {/* تعداد نفرات */}
                <div className="flex items-center gap-2">
                  <Input placeholder="تعداد" className="w-[162px] h-[48px] " />
                  <label className="text-gray-700 text-[14px] font-medium min-w-max dark:text-gray-200">
                    :تعداد نفرات
                  </label>
                </div>

                {/* انتخاب مقصد */}
                <div className="flex items-center gap-2">
                  <Select onValueChange={(value) => setDestination(value)}>
                    <SelectTrigger className="w-[162px] h-[48px] ">
                      <SelectValue placeholder="مقصد" />
                    </SelectTrigger>
                    <SelectContent>
                      {destinations.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <label className="text-gray-700 text-[14px] font-medium min-w-max dark:text-gray-200">
                    :انتخاب مقصد
                  </label>
                </div>
              </div>
              <Button
                className="h-[48px]  px-6 bg-gray-800 text-white whitespace-nowrap dark:text-gray-200"
                variant="outline"
                onClick={() => setOpen(false)}
              >
                بستن
              </Button>
              {/* مشاهده نتیجه */}
              <Button className="h-[48px]  px-6 bg-blue-600 text-white hover:bg-blue-700 whitespace-nowrap">
                مشاهده نتیجه
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
      <div className="flex font-serif mr-2 font-normal  text-[18px] sm:text-2xl">
        PIZA
      </div>
    </div>
  );
}
