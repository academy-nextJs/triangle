import TakhfifatCard from "@/components/common/TakhfifatCard/TakhfifatCard";
import Image from "next/image";
import FilterDrawerServer from "./FilterDrawerServer";
import { FilterParams } from "@/types/HouseMortgage/getHouse";
import { getFilteredHouses } from "@/utils/services/api/HouseMortgage/HouseMortgage";
import { mapHouseToCardProps } from "@/lib/mappers";

export default async function MortgageRentPage({
  searchParams,
}: {
  searchParams?: FilterParams;
}) {
  const houses = await getFilteredHouses(searchParams);
  const cards = houses.map(mapHouseToCardProps);
  return (
    <div className="w-full   py-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-col items-center md:items-end  mb-4 gap-4">
        <h1 className="text-xl md:text-2xl font-bold text-right font-[IranYekanMedium]">
          رهن و اجاره آپارتمان
        </h1>

        <div className="flex items-center mt-6 gap-2 w-full md:w-auto">
          <div className="flex flex-wrap justify-end gap-2 ">
            {[
              "حیاط دار",
              "پارکینگ دار",
              "عکس دار",
              "گران‌ترین",
              "ارزان‌ترین",
              "محبوب‌ترین",
              "همه",
            ].map((item, index) => (
              <button
                key={index}
                className={`p-3 rounded-2xl  font-[IranYekanMedium]  ${
                  index === 6
                    ? "bg-[#586CFF] text-white"
                    : "bg-white hover:bg-gray-200 text-[#272727] border"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

         
          <FilterDrawerServer/>
          <div className="relative">
            <input
              type="text"
              placeholder="...جست‌وجوکنید  "
              className=" rounded-xl font-medium text-base dark:text-gray-300 text-[#A6A6A6] font-[IranYekanRegular] border border-gray-300 px-8 py-3  text-right shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="absolute right-[-2px] top-[12px] mr-2">
              <Image src="/search.svg" width={30} height={30} alt="search" />{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-2">
 {cards.map((card, index) => (
          <TakhfifatCard key={index} {...card} />
        ))}
 
</div>
    </div>
  );
}
