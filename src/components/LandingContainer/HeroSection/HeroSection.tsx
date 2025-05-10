"use client";

import { Button } from "@/components/ui/button";
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
import { format } from "date-fns";
import { LucideArrowLeft } from "lucide-react";
import { RxCalendar } from "react-icons/rx";
import epartman from "../../../../public/eparteman.png";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { BlurFade } from "@/components/magicui/BlurFade";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("رزرو ملک");
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [destination, setDestination] = useState<string>("");

  const tabs = ["خرید و فروش", "رهن و اجاره", "رزرو ملک"];
  const destinations = ["تهران", "مشهد", "اصفهان", "شیراز", "تبریز"];

  return (
    <div className="  flex  justify-center ">
      <div className="flex w-[1260px] items-center   justify-around  mt-9">
        <div className=" w-auto lg:w-[457px] h-[594px] ">
          <BlurFade delay={0.3} inView>
            <Image className=" rounded-4xl" src={epartman} alt={""} />
          </BlurFade>
        </div>
        <div className=" mx-auto h-auto absolute xl:flex hidden top-[11%] transform -translate-y-1/2 px-4">
          <div className="flex flex-col items-center w-full">
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
                      className={`px-4 py-2 text-[16px] font-medium dark:bg-[#020618] dark:text-gray-200  bg-white transition-all ${
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
                <Button className="h-[48px] px-6 bg-blue-600 text-white dark:text-gray-200  hover:bg-blue-700 whitespace-nowrap">
                  مشاهده نتیجه
                </Button>

                {/* تاریخ خروج */}
                <div className="flex items-center gap-2 relative">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-[162px] h-[48px] justify-start pl-10 pr-3 relative text-gray-400 dark:text-gray-200 "
                      >
                        <RxCalendar className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-200 " />
                        <span className="text-[14px] dark:text-gray-200 ">
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
                  <label className="text-gray-700 text-[14px] font-medium dark:text-gray-200  min-w-max">
                    :تاریخ خروج
                  </label>
                </div>

                {/* تاریخ ورود */}
                <div className="flex items-center gap-2 relative">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-[162px] h-[48px] justify-start pl-10 pr-3 relative dark:text-gray-200  text-gray-400"
                      >
                        <RxCalendar className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-200 " />
                        <span className="text-[14px] text-right dark:text-gray-200 ">
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
                  <label className="text-gray-700 text-[14px] font-medium min-w-max dark:text-gray-200 ">
                    :تاریخ ورود
                  </label>
                </div>

                {/* تعداد نفرات */}
                <div className="flex items-center gap-2">
                  <Input placeholder="تعداد" className="w-[162px] h-[48px]" />
                  <label className="text-gray-700 text-[14px] font-medium min-w-max dark:text-gray-200 ">
                    :تعداد نفرات
                  </label>
                </div>

                {/* انتخاب مقصد */}
                <div className="flex items-center gap-2">
                  <Select onValueChange={(value) => setDestination(value)}>
                    <SelectTrigger className="w-[162px] h-[48px] ">
                      <SelectValue placeholder="مقصد" className="dark:text-gray-200 " />
                    </SelectTrigger>
                    <SelectContent>
                      {destinations.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <label className="text-gray-700 text-[14px] font-medium min-w-max dark:text-gray-200 ">
                    :انتخاب مقصد
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flax justify-items-end">
          <div className="w-[418px] h-[106px] gap-2">
            <BlurFade delay={0.3} inView>
              <p className="font-bold text-4xl text-right ">
                راحت ترین راه برای پیدا کردن خونه مورد علاقت
              </p>
            </BlurFade>
          </div>
          <div className="w-[418px] h-[106px] gap-3">
            <BlurFade delay={0.3 * 2} inView>
              <p className="font-semibold text-[#727272] text-right">
                رزور ، رهن ، اجاره و حتی خرید و فروش ملک مورد نظرتون مثل آب
                خوردن فقط در پیزا
              </p>
            </BlurFade>
          </div>
          <div className="w-[160px] h-[106px] mb-52">
            <BlurFade delay={0.3 * 3} inView>
              <Button
                className="w-[160px] h-[48px] mt-[14px] rounded-2xl bg-[#586CFF]"
                asChild
              >
                <Link href="/login">
                  <LucideArrowLeft /> رهن و اجاره ملک
                </Link>
              </Button>
            </BlurFade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
