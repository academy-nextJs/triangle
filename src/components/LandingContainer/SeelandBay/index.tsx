"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TbHorseToy, TbMap2 } from "react-icons/tb";

import { BathIcon, BedIcon, Car } from "lucide-react";

import Image from "next/image";
import apte from "../../../../public/ape.png";

const SelandBoy = () => {
  return (
    <div className=" mx-auto max-w-7xl p-4">
      {/* هدر بالا */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-[122px] mb-10 px-4">
        <Button
          variant="default"
          className="rounded-2xl text-white bg-[#586CFF] sm:w-[124px] w-[100%] h-[48px] mt-4 sm:mt-0 text-[16px]"
        >
          مشاهده همه
        </Button>
        <div className="flex items-center gap-3 flex-wrap">
          <h2 className="text-[28px] font-bold pb-7  w-[274px] h-[72px] text-right">
            خرید و فروش های داغ این هفته
          </h2>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {[1, 2, 3].map((item, index) => (
          <div key={index}>
            <Card className="bg-white shadow-lg rounded-[40px] w-[391px] h-[448px] overflow-hidden">
              <div className="flex justify-center items-center w-full h-[221px] ">
                <Image
                  src={apte}
                  alt="Apartment Image"
                  width={359}
                  height={221}
                  className="rounded-t-[24px] rounded-b-2xl object-cover"
                />
              </div>
              <div className=" flex flex-col justify-between h-[calc(438px-221px)] mr-4 text-right">
                <div>
                  <h3
                    className="font-semibold text-[20px] text-gray-800 mb-3 
                  "
                  >
                    آپارتمان لوکس زعفرانیه
                  </h3>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center text-gray-600 gap-1 mb-4">
                      <span className="font-medium text-[14px]">
                        تهران : زعفرانیه
                      </span>
                      <TbMap2 className="text-gray-500 w-[24px] h-[24px]" />
                    </div>
                    {/* خط زیر متن */}
                    <div className="w-[360px] h-px bg-gray-100" />
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3  pt-3 pb-1">
                  <div className="flex items-center gap-1">
                    <span className="text-gray-700 text-[14px] font-medium">
                      ۲ خواب
                    </span>
                    <BedIcon className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="h-[24px] w-px bg-gray-200" />
                  <div className="flex items-center gap-1">
                    <span className="text-gray-700 text-[14px] font-medium">
                      ۲ حمام
                    </span>
                    <BathIcon className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="h-[24px] w-px bg-gray-200" />
                  <div className="flex items-center gap-1">
                    <span className="text-gray-700 text-[14px] font-medium">
                      حیاط دار
                    </span>

                    <TbHorseToy className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="h-[24px] w-px bg-gray-200" />
                  <div className="flex items-center gap-1">
                    <span className="text-gray-700 text-[14px] font-medium">
                      1 پارکینگ
                    </span>
                    <Car className="w-5 h-5 text-gray-600" />
                  </div>
                </div>

                <div className="flex  items-end justify-end">
                  <span className="text-black text-[20px] font-bold ">
                    ۱,۵۰۰,۰۰۰ تومان
                  </span>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelandBoy;
