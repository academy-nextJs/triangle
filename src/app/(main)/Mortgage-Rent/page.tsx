import TakhfifatCardMortgage from "@/components/common/TakhfifatCard copy/TakhfifatCard";
import Image from "next/image";
import FilterDrawerServer from "./FilterDrawerServer";
import { FilterParams } from "@/types/HouseMortgage/getHouse";
import { getFilteredHouses } from "@/utils/services/api/HouseMortgage/HouseMortgage";
import { mapHouseToCardProps } from "@/lib/mappers";
import { TakhfifatCardProps } from "@/types/Landing/TakhfifatCardProps";

export default async function MortgageRentPage({
  searchParams,
}: {
  searchParams?: FilterParams;
}) {
  const houses = await getFilteredHouses(searchParams);
  const cards = houses.map(mapHouseToCardProps);
  return (
    <div className="w-full   py-8 max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-col items-center md:items-end  mb-4 gap-4">
        <h1 className="text-xl md:text-2xl font-bold text-right font-[IranYekanMedium]">
          رهن و اجاره آپارتمان
        </h1>

       
<div dir="rtl" className="flex items-center mt-6 gap-2 w-full min-[1056]:w-auto flex-col-reverse min-[1056]:flex-row">
<div className="flex w-full min-[1056px]:w-auto gap-2 flex-row min-[300px]:flex-row ">
    
    <div className="relative w-full  min-[1056px]:w-auto">
      <input
        type="text"
        placeholder="جست‌وجوکنید ... "
        className="w-full rounded-xl font-medium text-base dark:text-gray-300 text-[#A6A6A6] font-[IranYekanRegular] border border-gray-300 px-8 py-3 text-right shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <div className="absolute right-[-2px] top-[12px] mr-2">
        <Image src="/search.svg" width={30} height={30} alt="search" />
      </div>
    </div>
    <div className="w-full min-[300px]:w-1/2 min-[1056px]:w-auto">
      <FilterDrawerServer />
    </div>
  </div>
  <div className="flex flex-wrap justify-start w-full min-[1056]:w-auto gap-2">
    {[
      " همه",
      " محبوب‌ترین",
      " ارزان‌ترین",
      "گران‌ترین",
      "عکس دار",
      "پارکینگ دار",
      "حیاط دار",
    ].map((item, index) => (
      <button 
        key={index}
        className={`w-[calc(25%-0.5rem)] min-[1056]:w-auto p-3 rounded-2xl font-[IranYekanMedium] whitespace-nowrap text-sm ${
          index === 0
            ? "bg-[#586CFF] text-white"
            : "bg-white hover:bg-gray-200 text-[#272727] border"
        }`}
      >
        {item}
      </button>
    ))}

    
  </div>
</div>

      </div>

      <div dir="rtl" className="flex w-[100%] justify-center flex-wrap gap-8 mt-8 ">
        {cards.map((card: TakhfifatCardProps, index: number) => (
         
          <TakhfifatCardMortgage  {...card} />
        ))}
      </div>
    </div>



    

  );
}


