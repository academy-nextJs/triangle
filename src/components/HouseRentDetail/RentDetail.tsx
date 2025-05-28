import { House } from "@/types/HouseMortgage/getHouse";
import AddCommentForm from "../common/DetailComponents/ReserveAddComment";
import ReserveBooking from "../common/DetailComponents/ReserveBooking";
import ReserveDeComments from "../common/DetailComponents/ReserveDeComments";
import ReserveGallery from "../common/DetailComponents/ReserveGallery";
import { ReserveInfo } from "../common/DetailComponents/ReserveInfo";
import SimilarAds from "../common/DetailComponents/SimilarAds";
import Map from "../HouseReserveContainer/Map/Map";
import RentPrice from "../common/DetailComponents/RentPrice";

export default function RentDetail({ house }: { house: House }) {
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
          <div className="flex flex-col h-[calc(100vh-106px)] gap-5 md:w-1/2 overflow-y-scroll">
            <ReserveInfo house={house} />
            <p className="text-blue-500 pt-5">موقعیت مکانی</p>

            <div className="min-h-[350px]">
              <Map />
            </div>
            <p className="pb-5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت.
            </p>
            <RentPrice house={house} />
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
