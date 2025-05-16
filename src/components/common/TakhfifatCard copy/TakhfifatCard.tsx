import { Card } from "@/components/ui/card";
import { TbMap2 } from "react-icons/tb";
import Image from "next/image";
import apte from "../../../../public/ape.png";
import { TakhfifatCardProps } from "@/types/Landing/TakhfifatCardProps";

const toPersianDigits = (num: string | number): string => {
  return num.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]);
};

const TakhfifatCardMortgage = ({
  title,
  location,
  bedCount,
  bathCount,
  capacity,
  price,
  oldPrice,
  discount,
  photos,
  parking,
}: TakhfifatCardProps) => {
  return (
    <Card className="bg-white dark:bg-gray-900 shadow-lg rounded-[40px] w-[391px] h-[448px] overflow-hidden">
      <div className="flex justify-center items-center w-full h-[221px] ">
        <Image
          src={photos || apte}
          alt="Apartment"
          width={359}
          height={221}
          className="rounded-t-[24px] rounded-b-2xl object-cover"
        />
      </div>
      <div className=" flex flex-col justify-between h-[calc(438px-221px)] mr-4 text-right">
        <div>
          <h3 className="font-semibold text-[20px] font-[IranYekanRegular] dark:text-gray-300 text-gray-800 mb-3">
            {title}
          </h3>
          <div className="flex flex-col items-start">
            <div className="flex items-center text-gray-600 dark:text-gray-200 gap-1 mb-4">
              <TbMap2 className="text-gray-500 dark:text-gray-100 w-[24px] h-[24px] " />

              <span className="font-medium font-[IranYekanRegular] text-[14px]">
                {location}
              </span>
            </div>
            <div className="w-[360px] h-px bg-gray-100 dark:text-gray-50" />
          </div>
        </div>

        <div className="flex  items-center justify-start gap-4  pt-3 pb-1">
          <div className="flex items-center gap-1">
            <Image
              alt="bed"
              src="bed.svg"
              width={6}
              height={6}
              className="w-6 h-6 text-gray-600 dark:text-gray-300 font-[IranYekanRegular] invert-0 dark:invert"
            />

            <span className=" font-[IranYekanRegular] text-[16px] font-medium dark:text-gray-300">
              {toPersianDigits(bedCount)} خواب
            </span>
          </div>
          <div className="h-[24px] w-px bg-gray-200" />
          <div className="flex items-center gap-1">
            <Image
              alt="bath"
              src="bath.svg"
              width={7}
              height={7}
              className="w-5 h-5 text-gray-600 dark:text-gray-300 invert-0 dark:invert"
            />

            <span className=" text-[16px] font-medium font-[IranYekanRegular] dark:text-gray-300">
              {toPersianDigits(bathCount)} حمام
            </span>
          </div>
          <div className="h-[24px] w-px bg-gray-200 dark:text-gray-100" />

          <div className="flex items-center gap-1">
            <Image
              alt="parking"
              src="parking.svg"
              width={6}
              height={6}
              className="w-6 h-6 text-gray-600 dark:text-gray-300 invert-0 dark:invert"
            />

            <span className=" font-[IranYekanRegular] text-[16px] font-medium dark:text-gray-300">
              {toPersianDigits(parking)} پارکینگ
            </span>
          </div>
        </div>

        <div className="flex flex-nowrap items-center justify-between pl-4  mt-2">
          <div className="flex  items-start">
            <div className="relative inline-block">
              <span className="text-gray-500 text-sm font-bold dark:text-gray-250 font-[IranYekanRegular]">
                {toPersianDigits(oldPrice)}
              </span>
              <div className="absolute inset-0 w-full h-full">
                <div className="w-full h-[1px] bg-red-500 rotate-[-15deg] absolute top-1/2 left-0 font-[IranYekanRegular]"></div>
              </div>
            </div>
            <span className="font-bold text-[16px] pl-1 pr-1">/</span>
            <span className="text-black text-sm dark:text-gray-100 font-bold font-[IranYekanRegular] mt-1.5  ">
              {toPersianDigits(price)}
            </span>
          </div>
          <span className="text-white text-[16px]  font-bold bg-red-500 px-4 py-1 rounded-full font-[IranYekanRegular]">
            {discount}٪
          </span>
        </div>
      </div>
    </Card>
  );
};

export default TakhfifatCardMortgage;
