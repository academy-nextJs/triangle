import { Card } from "@/components/ui/card";
import { BathIcon, BedIcon, UsersIcon } from "lucide-react";
import { TbMap2 } from "react-icons/tb";
import Image from "next/image";
import apte from "../../../../public/ape.png";

interface TakhfifatCardProps {
  title: string;
  location: string;
  bedCount: number;
  bathCount: number;
  capacity: number;
  price: string;
  oldPrice: string;
  discount: string;
  image?: string;
}

const TakhfifatCard = ({
  title,
  location,
  bedCount,
  bathCount,
  capacity,
  price,
  oldPrice,
  discount,
  image,
}: TakhfifatCardProps) => {
  return (
    <Card className="bg-white dark:bg-gray-900 shadow-lg rounded-[40px] w-[391px] h-[448px] overflow-hidden">
      <div className="flex justify-center items-center w-full h-[221px] ">
        <Image
          src={image || apte}
          alt="Apartment Image"
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
          <div className="flex flex-col items-end">
            <div className="flex items-center text-gray-600 dark:text-gray-200 gap-1 mb-4">
              <span className="font-medium font-[IranYekanRegular] text-[14px]">{location}</span>
              <TbMap2 className="text-gray-500 dark:text-gray-100 w-[24px] h-[24px]" />
            </div>
            <div className="w-[360px] h-px bg-gray-100 dark:text-gray-50" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-4  pt-3 pb-1">
          <div className="flex items-center gap-1">
            <span className="text-gray-700 font-[IranYekanRegular] text-[16px] font-medium dark:text-gray-300">
              {bedCount} خواب
            </span>
            <BedIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </div>
          <div className="h-[24px] w-px bg-gray-200"  />
          <div className="flex items-center gap-1">
            <span className="text-gray-700 text-[16px] font-medium font-[IranYekanRegular] dark:text-gray-300">
              {bathCount} حمام
            </span>
            <BathIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </div>
          <div className="h-[24px] w-px bg-gray-200 dark:text-gray-100" />
          <div className="flex items-center gap-1">
            <span className="text-gray-700 font-[IranYekanRegular] text-[16px] font-medium dark:text-gray-300">
              {capacity} نفر
            </span>
            <UsersIcon className="w-6 h-6 text-gray-600 dark:text-gray-300 font-[IranYekanRegular]" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-2">
          <span className="text-white text-[16px] font-bold bg-red-500 px-4 py-1 rounded-full font-[IranYekanRegular]">
            ٪{discount}
          </span>
          <div className="flex  items-end">
            <span className="text-black text-[20px] dark:text-gray-100 font-bold font-[IranYekanRegular] ">{price}</span>
            <span className="font-bold text-[16px] pl-1 pr-1">/</span>
            <div className="relative inline-block">
              <span className="text-gray-500 text-[20px] font-bold dark:text-gray-250 font-[IranYekanRegular]">
                {oldPrice}
              </span>
              <div className="absolute inset-0 w-full h-full">
                <div className="w-full h-[1px] bg-red-500 rotate-[-15deg] absolute top-1/2 left-0 font-[IranYekanRegular]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TakhfifatCard;
