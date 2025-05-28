"use client";

import { House } from "@/types/HouseMortgage/getHouse";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function ConditionalRender({ house }: { house: House }) {
  const pathname = usePathname();

  if (!pathname.match(/^\/HouseReserve\/\d+$/)) {
    return null;
  }

  return (
    <div>
      <Image
        src={house.photos[1]}
        alt={`No Image`}
        width={600}
        height={250}
        className="w-full h-[250px] rounded-4xl object-cover"
      />
      <div className="text-4xl font-bold">چرا {house.title}؟</div>
      <p className="min-h-[192px]">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </p>
    </div>
  );
}
export function ConditionalRenderTitle({ house }: { house: House }) {
  const pathname = usePathname();

  if (!pathname.match(/^\/HouseReserve\/\d+$/)) {
    return null;
  }
  return <div className="text-4xl font-bold">چرا {house.title}؟</div>;
}
