"use client";

import { useForm } from "react-hook-form";

type BookingData = {
  Date: string;
  dDate: string;
  code?: string;
  people: number;
};
type Props = {
  house: {
    price: string;
  };
};

export default function BookingForm({ house }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingData>();

  const onSubmit = (data: BookingData) => {
    console.log("Booking data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" rounded-xl space-y-4 pt-5  w-full "
      dir="rtl"
    >
      <div className="flex flex-wrap justify-between  [&>*]:flex-[0_0_48%]  px-2 gap-4">
        <div>
          <p className="pb-2">تاریخ ورود </p>

          <input
            {...register("Date", { required: "تاریخ الزامی است" })}
            placeholder="وارد کنید"
            className={`w-full p-3 rounded-xl border ${
              errors.Date ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.Date && (
            <p className="text-red-400 text-sm mt-1">{errors.Date.message}</p>
          )}
        </div>
        <div>
          <p className="pb-2">تاریخ خروج </p>

          <input
            {...register("dDate", { required: "تاریخ الزامی است" })}
            placeholder="وارد کنید"
            className={`w-full p-3 rounded-xl border ${
              errors.dDate ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.dDate && (
            <p className="text-red-400 text-sm mt-1">{errors.dDate.message}</p>
          )}
        </div>
        <div className="">
          <p className="pb-2">تعداد نفرات </p>

          <input
            {...register("people", {
              required: "تعداد الزامی است",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "تعداد معتبر نیست",
              },
            })}
            placeholder="وارد کنید"
            className={`w-full p-3 rounded-xl border ${
              errors.people ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.people && (
            <p className="text-red-400 text-sm mt-1">{errors.people.message}</p>
          )}
        </div>{" "}
        <div>
          <p className="flex pb-2">
            کد تخفیف <p className="text-gray-500 pr-1">(اختیاری)</p>
          </p>

          <input
            {...register("code")}
            placeholder="وارد کنید"
            className="w-full p-3 rounded-xl border border-gray-300"
          />
        </div>
      </div>

      <div className="flex flex-col  justify-between mt-6 ">
        <p>قیمت </p>

        <div className="flex gap-2 items-center">
          <span className="line-through text-gray-400">
            {Number(house.price).toLocaleString("fa-IR")} تومان
          </span>
          <span className="text-green-400 font-bold">
            {Number(house.price).toLocaleString("fa-IR")} تومان
          </span>{" "}
          <span className="text-red-500 bg-red-100 px-3 py-1 rounded-full text-xs font-bold">
            ٪
            {Math.round(
              ((Number(house.price) - Number(house.price)) /
                Number(house.price)) *
                100
            ).toLocaleString("fa-IR")}
          </span>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-lg py-3 rounded-full font-bold transition"
      >
        همین الان رزرو کن
      </button>
    </form>
  );
}
