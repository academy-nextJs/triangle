"use client";

import { useState } from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface ReserveGallerySliderProps {
  photos: string[];
}

export default function ReserveGallery({ photos }: ReserveGallerySliderProps) {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex  md:w-1/2 gap-4 my-6">
      <div className="w-full px-5 lg:px-10">
        {/* Main Image Slider */}
        <div className="relative w-full min-h-[350] lg:min-h-[450px] rounded-xl overflow-hidden shadow">
          <Image
            src={photos[currentImage]}
            alt="House"
            layout="fill"
            objectFit="cover"
            priority={currentImage === 0}
            className="rounded-xl"
          />
          <button
            onClick={prevImage}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white p-1 md:p-3 rounded-full shadow"
          >
            <IoIosArrowBack className="text-lg text-gray-700" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white p-1 md:p-3 rounded-full shadow"
          >
            <IoIosArrowForward className="text-lg text-gray-700" />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-3 pr-3 mt-4">
          {photos.map((img, index) => (
            <div
              key={index}
              className="relative w-24 h-20 lg:w-48 lg:h-44 rounded-md cursor-pointer shadow"
            >
              <Image
                src={img}
                alt="Thumbnail"
                layout="fill"
                objectFit="cover"
                className={`rounded-md ${
                  index === currentImage ? "border-2 border-blue-500" : ""
                }`}
                onClick={() => setCurrentImage(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
