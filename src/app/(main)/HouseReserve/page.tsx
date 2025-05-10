import TakhfifatCard from "@/components/common/TakhfifatCard/TakhfifatCard";
import Filter from "@/components/HouseReserveContainer/Filter/Filter";
import SearchBar from "@/components/HouseReserveContainer/SearchBar/SearchBar";
import Map from "@/components/HouseReserveContainer/Map/Map";
import { ScrollArea } from "@/components/ui/scroll-area";
const staticCards = [
  {
    title: "آپارتمان لوکس زعفرانیه",
    location: "تهران : زعفرانیه، میدان انقلاب",
    bedCount: 2,
    bathCount: 2,
    capacity: 4,
    price: "۱,۵۰۰,۰۰۰ تومان",
    oldPrice: "۱,۸۰۰,۰۰۰ تومان",
    discount: "۱۵",
  },
  {
    title: "آپارتمان لوکس زعفرانیه",
    location: "تهران : زعفرانیه",
    bedCount: 2,
    bathCount: 2,
    capacity: 4,
    price: "۱,۵۰۰,۰۰۰ تومان",
    oldPrice: "۱,۸۰۰,۰۰۰ تومان",
    discount: "۱۵",
  },
  {
    title: "آپارتمان لوکس زعفرانیه",
    location: "تهران : زعفرانیه",
    bedCount: 2,
    bathCount: 2,
    capacity: 4,
    price: "۱,۵۰۰,۰۰۰ تومان",
    oldPrice: "۱,۸۰۰,۰۰۰ تومان",
    discount: "۱۵",
  },
  {
    title: "آپارتمان لوکس زعفرانیه",
    location: "تهران : زعفرانیه",
    bedCount: 2,
    bathCount: 2,
    capacity: 4,
    price: "۱,۵۰۰,۰۰۰ تومان",
    oldPrice: "۱,۸۰۰,۰۰۰ تومان",
    discount: "۱۵",
  },
];

const HouseReservePage = () => {
  return (
    <div className="flex flex-col xl:flex-row w-full gap-6 xl:px-0">
      <div className="w-full h-[300px] xl:w-[648px] xl:h-[648px] mt-6">
        <Map />
      </div>

      <div className="w-full xl:mr-8 xl:max-w-[calc(100%-648px-48px)]">
        <div className="flex flex-col sm:flex-row gap-2 mt-6 mb-4">
          <SearchBar />
          <Filter />
        </div>

        <ScrollArea className="h-[585px] pr-1">
          <div
            className="
      flex 
      flex-wrap 
      gap-4 
      xl:justify-start 
      max-xl:justify-center 
      max-[1474px]:flex-col 
      max-[1474px]:items-center
    "
          >
            {staticCards.map((card, index) => (
              <div
                key={index}
                className="
          w-full 
          xl:w-[calc(50%-0.5rem)] 
          max-[1474px]:w-full 
          max-xl:w-[calc(50%-0.5rem)]
        "
              >
                <TakhfifatCard {...card} />
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default HouseReservePage;
