import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "../DarkButton/ModeToggle";

// src/app/components/Header.tsx
export default function Header() {
  return (
    <div className="flex items-center justify-center  max-w-7xl mx-auto">
      <div className="flex gap-2 items-center  ml-3 grow-7">
        <Button
          className="w-[129px] h-[40px] mt-[14px] rounded-2xl bg-[#586CFF]"
          asChild
        >
          <Link href="/Login">ثبت نام و ورود</Link>
        </Button>
        <div className="mt-[14px]">
          <ModeToggle />
        </div>
      </div>
      <div className="w-[228px] h-[21px] grow-7 flex">
        <Button className=" font-bold text-[16px]" variant="link">
          <Link href="/ContactUs">درباره ما</Link>
        </Button>
        <Button className=" font-bold text-[16px]" variant="link">
          مقالات
        </Button>
        <Button className=" font-bold text-[16px]" variant="link">
          <Link href="/">خانه</Link>
        </Button>
      </div>
      <div className="flex font-serif mr-2 font-normal text-2xl">PIZA</div>
    </div>
  );
}
