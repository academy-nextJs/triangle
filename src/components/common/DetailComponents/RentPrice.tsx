import { FaPhoneAlt } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { format } from "date-fns-jalali";

export default function RentPrice({
  house,
}: {
  house: {
    price: string;
    sellerName: string;
    last_updated: string;
    photos: string[];
  };
}) {
  return (
    <div className=" rounded-2xl  p-4">
      <h2 className="text-blue-500 font-bold text-lg mb-4">
        قیمت رهن و اجاره و اطلاعات تماس
      </h2>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Mortgage Price Box */}
        <div className=" rounded-2xl border border-gray-200  p-4 flex-1">
          <p className="text-blue-500 font-bold text-lg text-right">
            قیمت رهن از
          </p>
          <p className=" text-xl font-bold text-right mt-2">
            {Number(house.price + "0").toLocaleString("fa-IR")} تومان
          </p>
        </div>

        {/* Rent Price Box */}
        <div className=" rounded-2xl border border-gray-200  p-4 flex-1">
          <p className="text-blue-500 font-bold text-lg text-right">
            قیمت اجاره از
          </p>
          <p className=" text-xl font-bold text-right mt-2">
            {Number(house.price).toLocaleString("fa-IR")} تومان
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        {/* Owner & Date */}
        <div className="flex gap-2  text-right">
          <div className="flex-shrink-0">
            {house.photos[99] ? (
              <img
                src={house.photos[99]}
                alt={`${house.sellerName}'s profile`}
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-sm">
                  {house.sellerName.charAt(0)}
                </span>
              </div>
            )}
          </div>
          <div>
            <p className=" font-semibold">{house.sellerName}</p>
            <p className="text-gray-600 text-sm">
              {format(new Date(house.last_updated), "dd  MMMM yyyy")}
            </p>
          </div>
        </div>
        {/* Contact Box */}
        <div className="flex  items-center  gap-4">
          <div className="w-12 h-12 rounded-full border border-[#5C6CFF] flex items-center justify-center text-[#5C6CFF] text-xl cursor-pointer hover:bg-[#5C6CFF] hover:text-white transition">
            <FiMessageCircle />
          </div>
          <div
            className="flex items-center font-bold bg-[#5C6CFF] text-white py-3 px-5 rounded-full text-base"
            dir="ltr"
          >
            {maskPhone("09111111111")} : شماره تماس
          </div>
        </div>
      </div>
    </div>
  );
}

// Mask phone number like 0938***5642
function maskPhone(phone: string): string {
  return phone.replace(/(\d{4})\d{3}(\d{3})/, "$1***$2");
}
