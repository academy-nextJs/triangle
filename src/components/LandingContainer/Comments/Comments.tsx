"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LuArrowLeft } from "react-icons/lu";
import { LuArrowRight } from "react-icons/lu";
import { Comment } from "@/types/Landing/Comments";
import Image from "next/image";

interface Props {
  comments: Comment[];
}

const chunkArray = (arr: any[], size: number) => {
  const chunked = [];
  for (let i = 0; i < arr.length; i += size) {
    chunked.push(arr.slice(i, i + size));
  }
  return chunked;
};

export default function Testimonials({ comments }: Props) {
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const [currentGroup, setCurrentGroup] = useState(0);

  const getChunkSize = () => {
    if (windowWidth < 630) return 1;
    if (windowWidth < 768) return 2;
    return 3;
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setCurrentGroup(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chunkedTestimonials = chunkArray(comments, getChunkSize());
  const progress = ((currentGroup + 1) / chunkedTestimonials.length) * 100;

  const handlePrev = () => {
    setCurrentGroup((prev) =>
      prev === 0 ? chunkedTestimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentGroup((prev) =>
      prev === chunkedTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div
      dir="rtl"
      className="px-4 md:px-8 py-12 flex flex-col items-center justify-center mt-8"
    >
      <div className="w-full max-w-7xl mr-5 mb-8">
        <h2 className="text-right text-3xl font-bold font-[IranYekanMedium]">
          نظرات کاربران پیزا
        </h2>
      </div>

      <div className="relative w-full max-w-7xl min-h-[500px] flex flex-row items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentGroup}-${getChunkSize()}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-full h-full flex gap-6 justify-center items-center px-2 md:px-0"
          >
            {chunkedTestimonials[currentGroup].map((item, index) => (
              <div
                key={index}
                className="bg-[#586CFF] text-white rounded-4xl p-6 flex flex-col justify-between w-full max-w-[400px] h-[500px]"
              >
                <div className="flex-1 overflow-hidden">
                  <p className=" font-[IranYekanMedium] leading-relaxed text-justify font-medium text-base md:text-base max-h-[400px] overflow-hidden text-ellipsis line-clamp-[13]">
                    {item.caption ?? "متنی وارد نشده است"}{" "}
                  </p>
                </div>
                <div className="mt-4 flex flex-row gap-2">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full ">
                    <Image
                      src="/user.png"
                      alt="user"
                      width={100}
                      height={100}
                    />{" "}
                  </div>
                  <div className="flex flex-col">
                    <p className=" font-[IranYekanRegular] font-semibold text-sm md:text-base truncate">
                      {item.title ?? "کاربر"}
                    </p>
                    <p className="font-[IranYekanRegular] text-xs mt-1">
                      {new Date(item.created_at).toLocaleDateString("fa-IR")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex  items-center gap-6 mt-8">
        <Button variant="outline" size="icon" onClick={handleNext}>
          <LuArrowRight />
        </Button>
        <Button variant="outline" size="icon" onClick={handlePrev}>
          <LuArrowLeft />
        </Button>

        <div className="relative w-10 h-10">
          <svg
            className="absolute top-0 left-0 w-full h-full transform -rotate-90"
            viewBox="0 0 36 36"
          >
            <path
              className="text-gray-300"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <motion.path
              className="text-blue-700"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              strokeDasharray="100, 100"
              strokeDashoffset={100 - progress}
              transition={{ duration: 0.5 }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
