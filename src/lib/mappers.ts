import { House } from "@/types/HouseMortgage/getHouse";
import { TakhfifatCardProps } from "@/types/Landing/TakhfifatCardProps";

export function mapHouseToCardProps(house: House): TakhfifatCardProps {
  const oldPrice = Number(house.price) * 1.2;
  const discount = "۲۰"; 

  return {
    title: house.title,
    location: house.address,
    price: `${Number(house.price).toLocaleString()} تومان`,
    oldPrice:` ${Math.round(oldPrice).toLocaleString()} تومان`,
    discount,
    photos: house.photos?.[0] || "/placeholder.jpg",
    capacity: house.capacity,
    bedCount: house.rooms,
    bathCount: house.bathrooms,
    parking:house.parking,
  };
}