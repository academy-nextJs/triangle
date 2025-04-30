"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const TopRank = () => {
  return (
<div className="flex flex-col  min-[1009px]:flex-row items-center justify-center gap-8 px-4 py-12 max-w-7xl mt-8  mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex-shrink-0 w-full min-[1009px]:w-1/2"
      >
        <div className="overflow-hidden rounded-xl ">
          <Image
            src="/topRank.svg"
            alt="فضای کاری"
            width={800}
            height={500}
            className="object-cover w-full h-auto  "
            priority
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full min-[1009px]:w-1/2 space-y-4 text-right"
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="inline-flex items-center justify-center w-10 h-10 rounded-full text-xl border-2 border-yellow-400"
        >
          <Image
            src="/star.svg"
            alt="رتبه"
            width={24}
            height={24}
            className="object-contain"
            priority
          />
        </motion.div>

        <h2 className="text-3xl md:text-2xl font-bold leading-tight font-[IranYekanExtraBold]">
          رتبه برتر در بین وبسایت‌های <br />
          رزرو و اجاره ایران
        </h2>

        <p
          dir="rtl"
          className="text-sm md:text-base text-justify mt-7 font-normal text-[#2C2C2C] transition-transform hover:scale-105  duration-300"
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت
        </p>
      </motion.div>
    </div>
  );
};

export default TopRank;
