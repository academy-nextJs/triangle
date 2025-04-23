import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";

const HeroSection = () => {
  return (
    <div className="flex  items-center justify-around flex-wrap mt-9">
      <div className="w-[457px] h-[594px] bg-blue-800 "></div>
      <div className="flax ">
        <div className="w-[418px] h-[104px]">
          <span className="font-bold text-4xl ">
            {" "}
            راحت ترین راه برای پیدا کردن خونه مورد علاقت
          </span>
        </div>
        <div className="w-[418px] h-[104px]">
          <p className="font-semibold text-[#727272] ">
            {" "}
            رزور ، رهن ، اجاره و حتی خرید و فروش ملک مورد نظرتون مثل آب خوردن
            فقط در پیزا
          </p>
        </div>
        <div className="w-[418px] h-[104px]">
          <Button
            className="w-[160px] h-[48px] mt-[14px] rounded-2xl bg-[#586CFF]"
            asChild
          >
            <Link href="/login">
              {" "}
              <LuArrowLeft /> رهن و اجاره ملک
            </Link>
          </Button>
        </div>
        <div className=" z-20 w-[] h-[135px] bg-amber-400">
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
