import { Card } from "@/components/ui/card";
import { TbMap2 } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { MdPeople } from "react-icons/md";

import apte from "../../../../public/ape.png";
import Image from "next/image";
import React from "react";
import { BathIcon, BedIcon, UsersIcon } from "lucide-react";

const Takhfifat = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col sm:flex-row justify-center gap-4">
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
                  <h3 className="font-semibold text-[20px] text-gray-800 mb-3 
                  ">
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

                <div className="flex items-center justify-center gap-4  pt-3 pb-1">
                  <div className="flex items-center gap-1">
                    <span className="text-gray-700 text-[16px] font-medium">
                      ۲ خواب
                    </span>
                    <BedIcon className="w-6 h-6 text-gray-600" />
                  </div>
                  <div className="h-[24px] w-px bg-gray-200" />
                  <div className="flex items-center gap-1">
                    <span className="text-gray-700 text-[16px] font-medium">
                      ۲ حمام
                    </span>
                    <BathIcon className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="h-[24px] w-px bg-gray-200" />
                  <div className="flex items-center gap-1">
                    <span className="text-gray-700 text-[16px] font-medium">
                      ۴ نفر
                    </span>
                    <UsersIcon className="w-6 h-6 text-gray-600" />
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4 mt-2">
                  <span className="text-white text-[16px] font-bold bg-red-500 px-4 py-1 rounded-full">
                    ٪۱۵
                  </span>
                  <div className="flex  items-end">
                    <span className="text-black text-[20px] font-bold ">
                      ۱,۵۰۰,۰۰۰ تومان
                    </span>
                    <span className="font-bold text-[16px] pl-1 pr-1">/</span>
                    <div className="relative inline-block">
                      <span className="text-gray-500 text-[20px] font-bold">
                        ۱,۸۰۰,۰۰۰ تومان
                      </span>
                      <div className="absolute inset-0 w-full h-full">
                        <div className="w-full h-[1px] bg-red-500 rotate-[-15deg] absolute top-1/2 left-0"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Takhfifat;
