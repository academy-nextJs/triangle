"use client";
import { Calendar } from "@/components/ui/calendar";
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

import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { useState } from "react";
import { RxCalendar } from "react-icons/rx";

export const Filter = () => {
  const [activeTab, setActiveTab] = useState("رزرو ملک");
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [destination, setDestination] = useState<string>("");

  const tabs = ["خرید و فروش", "رهن و اجاره", "رزرو ملک"];
  const destinations = ["تهران", "مشهد", "اصفهان", "شیراز", "تبریز"];
  return (
    <div className="w-full dark:bg-[#020618] bg-white rounded-2xl shadow-md p-4 md:p-6 flex flex-col gap-6">
      {/* Tabs */}
      <div className="flex gap-4 justify-center md:justify-end pt-[1px] pr-0 md:pr-8 flex-wrap">
        {tabs.map((tab) => (
          <div key={tab} className="flex flex-col items-center">
            <div
              className={`h-1.5 w-full rounded-b-lg ${
                activeTab === tab ? "bg-blue-600" : "bg-transparent"
              } transition-all`}
            />
            <button
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-[16px] font-medium dark:bg-[#020618] dark:text-gray-200  bg-white transition-all font-[IranYekanRegular] ${
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
      <div className="flex flex-nowrap gap-4 md:gap-6 items-center justify-center md:justify-start">
        {/* مشاهده نتیجه */}
        <Button className="h-[48px] px-6 bg-blue-600 text-white dark:text-gray-200  hover:bg-blue-700 whitespace-nowrap font-[IranYekanRegular]">
          مشاهده نتیجه
        </Button>

        {/* تاریخ خروج */}
        <div className="flex items-center gap-2 relative">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className=" w-[122px] xl:w-[162px] h-[48px] justify-start pl-10 pr-3 relative text-gray-400 dark:text-gray-200 font-[IranYekanRegular]"
              >
                <RxCalendar className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-200  font-[IranYekanRegular]" />
                <span className=" text-[12px] xl:text-[14px] dark:text-gray-200 font-[IranYekanRegular] ">
                  {endDate ? format(endDate, "yyyy/MM/dd") : "انتخاب تاریخ"}
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
          <label className="text-gray-700  text-[12px] xl:text-[14px] font-medium dark:text-gray-200  min-w-max font-[IranYekanRegular]">
            :تاریخ خروج
          </label>
        </div>

        <div className="flex items-center gap-2 relative">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className=" w-[122px]  xl:w-[162px] h-[48px] justify-start pl-10 pr-3 relative dark:text-gray-200  text-gray-400"
              >
                <RxCalendar className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-200 " />
                <span className=" text-[12px] xl:text-[14px] text-right dark:text-gray-200 font-[IranYekanRegular]">
                  {startDate ? format(startDate, "yyyy/MM/dd") : "انتخاب تاریخ"}
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
          <label className="text-gray-700  text-[12px] xl:text-[14px] font-medium min-w-max dark:text-gray-200 font-[IranYekanRegular]">
            :تاریخ ورود
          </label>
        </div>

        {/* تعداد نفرات */}
        <div className="flex items-center gap-2">
          <Input
            placeholder="تعداد"
            className=" w-[122px] xl:w-[162px] h-[48px] font-[IranYekanRegular]"
          />
          <label className="text-gray-700  text-[12px] xl:text-[14px] font-medium min-w-max dark:text-gray-200 font-[IranYekanRegular]">
            :تعداد نفرات
          </label>
        </div>

        {/* انتخاب مقصد */}
        <div className="flex items-center gap-2">
          <Select onValueChange={(value) => setDestination(value)}>
            <SelectTrigger className=" w-[122px] xl:w-[162px] h-[48px] font-[IranYekanRegular] ">
              <SelectValue
                placeholder="مقصد"
                className="dark:text-gray-200 font-[IranYekanRegular] "
              />
            </SelectTrigger>
            <SelectContent>
              {destinations.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <label className="text-gray-700  text-[12px] xl:text-[14px] font-medium min-w-max dark:text-gray-200 font-[IranYekanRegular]">
            :انتخاب مقصد
          </label>
        </div>
      </div>
    </div>
  );
};
