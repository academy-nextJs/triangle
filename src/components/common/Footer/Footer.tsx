import React from "react";

const Footer = () => {
  return (
    <div className="bg-white text-gray-700 w-full px-6 py-10">
      <div className="max-w-7xl mx-auto border-t-2 border-[#000000] mb-10"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-32 md:flex-row-reverse  ">
        <div dir="rtl" className="flex flex-col gap-4 md:w-1/3">
          <h2 className="flex font-serif font-normal text-4xl text-[#000000]">
            PIZA
          </h2>
          <p className="font-[IranYekanRegular] text-base font-medium text-[#1E1E1E] leading-6 text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه{" "}
          </p>
          <div className="flex justify-start items-center  mt-4">
            <img src="/footer.svg" alt="icon1" className=" h-10" />
          </div>
        </div>

        <div
          dir="rtl"
          className=" flex flex-col  md:flex-row mt-14  gap-24  md:w-2/3"
        >
          <div className="flex flex-col gap-3">
            <h3 className="text-xl text-[#1E1E1E] font-semibold whitespace-nowrap font-[IranYekanMedium]">
              نحوه رزرو اقامتگاه
            </h3>
            <ul className="text-sm leading-6 space-y-2">
              <li className="font-normal text-base text-[#1E1E1E] whitespace-nowrap font-[IranYekanRegular]">
                راهنمای رزرو اقامتگاه
              </li>
              <li className="font-normal text-base text-[#AAAAAA] whitespace-nowrap font-[IranYekanMedium]">
                {" "}
                شیوه پرداخت
              </li>
              <li className="font-normal text-base text-[#AAAAAA] whitespace-nowrap font-[IranYekanMedium]">
                {" "}
                لغو رزرو اقامتگاه
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xl text-[#1E1E1E] font-semibold whitespace-nowrap font-[IranYekanMedium]">
              خدمات مشتریان
            </h3>
            <ul className="text-sm leading-6 space-y-2">
              <li className="font-normal text-base text-[#AAAAAA] whitespace-nowrap font-[IranYekanMedium]">
                پرسش های متداول مهمان
              </li>
              <li className="font-normal text-base text-[#AAAAAA] whitespace-nowrap font-[IranYekanMedium]">
                پرسش های متداول میزبان
              </li>
              <li className="font-normal text-base text-[#AAAAAA] whitespace-nowrap font-[IranYekanMedium]">
                چطور اقامتگاه ثبت کنم؟
              </li>
              <li className="font-normal text-base text-[#AAAAAA] whitespace-nowrap font-[IranYekanMedium]">
                حریم شخصی کاربران
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-xl text-[#1E1E1E] font-semibold whitespace-nowrap font-[IranYekanMedium]">
              راه ارتباطی دلتا
            </h4>
            <p className="font-normal text-base text-[#AAAAAA] whitespace-nowrap font-[IranYekanMedium]">
              09229167194 - 098541612310
            </p>
            <p className="font-normal text-base text-[#AAAAAA] whitespace-nowrap font-[IranYekanMedium]">
              Delta@gmail.com
            </p>
            <p className="font-normal text-base text-[#AAAAAA]">
              گیلان، رشت، میدان آزادی، جنب چهار راه عظیمی زاده
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
