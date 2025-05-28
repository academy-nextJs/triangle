import { House } from "@/types/HouseMortgage/getHouse";
import AddCommentForm from "../common/DetailComponents/ReserveAddComment";
import ReserveBooking from "../common/DetailComponents/ReserveBooking";
import ReserveDeComments from "../common/DetailComponents/ReserveDeComments";
import ReserveGallery from "../common/DetailComponents/ReserveGallery";
import { ReserveInfo } from "../common/DetailComponents/ReserveInfo";
import SimilarAds from "../common/DetailComponents/SimilarAds";

export default function ReserveDetail({ house }: { house: House }) {
  return (
    <div
      className="container mx-auto font-[IranYekanRegular] px-4 py-8 max-w-[1440px]"
      dir="rtl"
    >
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-right mb-2">{house.title}</h1>
        <p className="text-sm text-gray-600 text-right">{house.address}</p>
        <div className="md:flex">
          <ReserveGallery photos={house.photos} />
          <div className="flex flex-col h-[calc(100vh-106px)] md:w-1/2 overflow-y-scroll">
            <ReserveInfo house={house} />
            <div>
              <p className="text-blue-500 pt-5">رزرو هتل</p>
              <ReserveBooking house={house} />
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-blue-500 pt-10">نظرات کاربران </p>
              <AddCommentForm houseId={house.id} />
              <ReserveDeComments houseId={house.id} />
            </div>
          </div>
        </div>
        <SimilarAds />
      </div>
    </div>
  );
}
