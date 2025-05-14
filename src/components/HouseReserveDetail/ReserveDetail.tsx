import Image from "next/image";
import { ReserveInfo } from "./ReserveDetailComponents/ReserveInfo";
import ReserveBooking from "./ReserveDetailComponents/ReserveBooking";
import ReserveGallery from "./ReserveDetailComponents/ReserveGallery";

export type HouseType = {
  id: string;
  title: string;
  address: string;
  photos: string[];
  rate: string;
  price: string;
  tags: string[];
  capacity: number;
  categories: { name: string };
  bathrooms: number;
  parking: number;
  rooms: number;
  yard_type: string;
};

export default function ReserveDetail({ house }: { house: HouseType }) {
  return (
    <div
      className="container mx-auto font-[IranYekanRegular] px-4 py-8 max-w-[1440px]"
      dir="rtl"
    >
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-right mb-2">{house.title}</h1>
        <p className="text-sm text-gray-600 text-right">{house.address}</p>
        <div className="flex">
          <ReserveGallery photos={house.photos} />
          <div className="flex flex-col h-[calc(100vh-106px)] w-1/2 overflow-y-scroll">
            <ReserveInfo house={house} />
            <div>
              <p className="text-blue-500 pt-5">رزرو هتل</p>
              <ReserveBooking house={house} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
