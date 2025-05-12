"use client";

import ArrowLeft from "@/components/Svg/ArrowLeft";
import ArrowRight from "@/components/Svg/ArrowRight";
import MapSvg from "@/components/Svg/MapSvg";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const slides = [
  {
    backgroundImage: "/images/register.png",
    title: "جنگل گلستان",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد ...",
    userName: "پارسا آقایی",
    date: "12 مرداد 1403",
  },
  {
    backgroundImage: "/images/chitgar.jpg",
    title: "دریاچه چیتگر",
    description:
      "متن ساختگی لورم ایپسوم برای تست طراحی و چاپ، با هدف ایجاد محتوای نامفهوم و ساده برای پر کردن فضاهای خالی در طراحی گرافیک و وب استفاده می‌شود ...",
    userName: "علی محمدی",
    date: "15 شهریور 1403",
  },
  {
    backgroundImage: "/images/damavand.jpg",
    title: "کوه دماوند",
    description:
      "لورم ایپسوم به عنوان متنی ساختگی برای پر کردن فضا در طراحی‌های گرافیکی و وب‌سایت‌ها استفاده می‌شود تا طرح نهایی را به صورت واقعی‌تر نمایش دهد ...",
    userName: "سارا احمدی",
    date: "20 مهر 1403",
  },
  {
    backgroundImage: "/images/persiangulf.jpg",
    title: "خلیج فارس",
    description:
      "خلیج فارس، یکی از زیباترین و تاریخی‌ترین مناطق ایران، با سواحل خیره‌کننده و اهمیت استراتژیک، مقصدی بی‌نظیر برای گردشگران و طبیعت‌دوستان است. این خلیج با جزایر متعدد و فرهنگ غنی، همیشه مورد توجه بوده است ...",
    userName: "نیما رحیمی",
    date: "25 آبان 1403",
  },
];

const LeftSide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Handle manual navigation
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[currentSlide];

  // Animation variants for Framer Motion
  const backgroundVariants = {
    initial: { opacity: 0.9 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const titleVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };

  const contentVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 },
  };

  const circumference = 88;
  const strokeDashoffset =
    circumference * (1 - (currentSlide + 1) / slides.length);

  return (
    <motion.div
      className="relative flex flex-col md:w-1/2 bg-cover rounded-3xl bg-center"
      style={{ backgroundImage: `url(${slide.backgroundImage})` }}
      variants={backgroundVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: "easeInOut" }}
      key={`bg-${currentSlide}`}
    >
      <motion.div
        className="absolute top-5 right-5 flex gap-7 text-white text-base font-bold rounded-3xl"
        variants={titleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5, ease: "easeInOut" }}
        key={`title-${currentSlide}`}
      >
        <div>
          <MapSvg />
        </div>
        {slide.title}
      </motion.div>
      <div className="absolute bottom-5 p-5 mx-5 w-[95%] flex flex-col gap-1 justify-center items-start dark:bg-gray-950 bg-white text-base font-bold rounded-2xl">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.33317 6.66665C8.33317 8.238 8.33317 9.02365 7.84501 9.51181C7.35686 9.99998 6.57119 9.99998 4.99984 9.99998C3.42849 9.99998 2.64281 9.99998 2.15466 9.51181C1.6665 9.02365 1.6665 8.238 1.6665 6.66665C1.6665 5.0953 1.6665 4.30962 2.15466 3.82147C2.64281 3.33331 3.42849 3.33331 4.99984 3.33331C6.57119 3.33331 7.35686 3.33331 7.84501 3.82147C8.33317 4.30962 8.33317 5.0953 8.33317 6.66665Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M8.3335 5.83331V9.5684C8.3335 12.8789 6.23707 15.6864 3.3335 16.6666"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M18.3332 6.66665C18.3332 8.238 18.3332 9.02365 17.845 9.51181C17.3568 9.99998 16.5712 9.99998 14.9998 9.99998C13.4285 9.99998 12.6428 9.99998 12.1547 9.51181C11.6665 9.02365 11.6665 8.238 11.6665 6.66665C11.6665 5.0953 11.6665 4.30962 12.1547 3.82147C12.6428 3.33331 13.4285 3.33331 14.9998 3.33331C16.5712 3.33331 17.3568 3.33331 17.845 3.82147C18.3332 4.30962 18.3332 5.0953 18.3332 6.66665Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M18.3335 5.83331V9.5684C18.3335 12.8789 16.2371 15.6864 13.3335 16.6666"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <p className="text-xs">{slide.description}</p>
        <div className="flex w-full justify-between pt-1">
          <motion.div
            className="flex gap-2"
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            key={`author-${currentSlide}`}
          >
            <img className="size-12 bg-gray-950 rounded-full" />
            <div className="flex flex-col gap-0.5">
              <h3 className="text-sm">{slide.userName}</h3>
              <h4 className="text-gray-400 text-sm">{slide.date}</h4>
            </div>
          </motion.div>
          <div className="flex gap-2 justify-center items-center">
            <button onClick={handleNext}>
              <ArrowRight />
            </button>
            <button onClick={handlePrev}>
              <ArrowLeft />
            </button>
            <motion.svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Slider progress indicator"
            >
              <motion.circle
                cx="16"
                cy="16"
                r="14"
                fill="none"
                stroke="#586CFF"
                strokeWidth="2"
                strokeDasharray="88"
                initial={{ strokeDashoffset: 88 }}
                animate={{ strokeDashoffset }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </motion.svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export { LeftSide };
