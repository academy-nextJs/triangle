import { Button } from "@/components/ui/button";

import { LucideArrowLeft } from "lucide-react";
import epartman from "../../../../public/eparteman.png";
import Link from "next/link";
import Image from "next/image";
import { BlurFade } from "@/components/magicui/BlurFade";
import { Filter } from "./Filter";

const HeroSection = () => {
  return (
    <div className="  flex  justify-center ">
      <div className="flex w-[1260px] items-center flex-wrap justify-between  mt-9">
        <div className=" w-[457px] h-[594px] ">
          <BlurFade delay={0.3} inView>
            <Image className=" rounded-4xl" src={epartman} alt={""} />
          </BlurFade>
        </div>
        <div className=" mx-auto h-auto absolute lg:flex hidden top-[11%] transform -translate-y-1/2 px-4">
          <BlurFade delay={0.3} inView>
            <div className="flex flex-col items-center w-full">
              <Filter />
            </div>
          </BlurFade>
        </div>

        <div className="flax justify-items-end">
          <div className="w-[418px] h-[106px] gap-2">
            <BlurFade delay={0.3} inView>
              <p className="font-bold text-4xl text-right font-[IranYekanMedium] ">
                راحت ترین راه برای پیدا کردن خونه مورد علاقت
              </p>
            </BlurFade>
          </div>
          <div className="w-[418px] h-[106px] gap-3">
            <BlurFade delay={0.3 * 2} inView>
              <p className="font-semibold text-[#727272] text-right font-[IranYekanRegular]">
                رزور ، رهن ، اجاره و حتی خرید و فروش ملک مورد نظرتون مثل آب
                خوردن فقط در پیزا
              </p>
            </BlurFade>
          </div>
          <div className="w-[160px] h-[106px] mb-1 lg:mb-52">
            <BlurFade delay={0.3 * 3} inView>
              <Button
                className="w-[160px] h-[48px] mt-[14px] rounded-2xl bg-[#586CFF]"
                asChild
              >
                <Link href="/Mortgage-Rent">
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
