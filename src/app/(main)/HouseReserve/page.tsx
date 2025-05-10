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
    <div className="flex flex-col lg:flex-row gap-6 w-full h-full">
      <div className="w-full lg:w-[648px] h-[300px] lg:h-[648px]  mt-6">
        <Map />
      </div>

      <div className=" mr-8 w-full max-w-[calc(100%-648px-48px)]">
        <div className="flex  gap-2 mt-6 mb-4">
          <SearchBar />
          <Filter />
        </div>
        <ScrollArea className="h-[585px] pr-1 ">
  <div className="flex flex-wrap gap-4 max-[1474px]:flex-col">
    {staticCards.map((card, index) => (
      <div key={index} className="w-[calc(50%-0.5rem)] max-[1474px]:w-full">
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