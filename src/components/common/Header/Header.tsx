import { Button } from "@/components/ui/button";
import Link from "next/link";

// src/app/components/Header.tsx
export default function Header() {
  return (
    <div className="flex items-center justify-center gap-80 flex-wrap   max-w-7xl mx-auto">
      <div className="flex ">
        <Button
          className="w-[129px] h-[49px] mt-[14px] rounded-2xl bg-[#586CFF]"
          asChild
        >
          <Link href="/Login">ثبت نام و ورود</Link>
        </Button>
      </div>
      <div className="w-[228px] h-[21px] flex">
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
      <div className="flex font-serif font-normal text-2xl">PIZA</div>
    </div>
  );
}
