"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useState, useEffect } from "react";
import * as React from "react";
// import { Destination } from "@/types/Landing/Destination";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { getLocation } from "@/utils/services/api/Landing/VillaRental/Location";

interface Destination {
  id: string;
  area_name: string;
}

const VillaRental = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await getLocation();
        if (Array.isArray(response)) {
          const data = response.map((item) => ({
            id: item.id,
            area_name: item.area_name,
          }));
          setDestinations(data);
        }
      } catch (error) {
        console.error("Failed to fetch destinations:", error);
      }
    };

    fetchDestinations();
  }, []);


  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="px-4 py-6 max-w-7xl mx-auto ">
      <h2 className="text-right text-3xl font-bold md:text-2xl  mb-6  font-[IranYekanMedium]">
        اجاره ویلا در <br /> محبوب‌ترین مقاصد این ماه
      </h2>

      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {destinations.map((dest) => (
          <div
            key={dest.id}
            className="bg-white rounded-4xl border border-[#EAEAEA] shadow-sm overflow-hidden"
          >
            <div className="p-4 ">
              <div className=" w-full ">
                <motion.div
                  className="w-full relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <Image
                    src="/savadkooh.svg"
                    alt={dest.area_name}
                    width={400}
                    height={160}
                    className="rounded-lg w-full h-auto object-cover"
                  />
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300"
                    whileHover={{ opacity: 0.3 }}
                    style={{ zIndex: 1 }}
                  />
                </motion.div>
              </div>
            </div>
            <div className="flex flex-row mb-3 justify-between mx-6">
              <div
                dir="rtl"
                className="text-center text-sm  font-semibold text-[#848484]"
              >
              50 مورد
              </div>
              <div className="text-center text-base font-semibold text-[#1E1E1E]">
                {dest.area_name}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="block md:hidden">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="relative w-full"
        >
          <CarouselContent className="-ml-4">
            {destinations.map((dest) => (
              <CarouselItem
                key={dest.id}
                className="pl-4 basis-full sm:basis-1/2"
              >
                <div className="bg-white rounded-4xl border border-[#EAEAEA] shadow-sm overflow-hidden">
                  <div className="p-4">
                    <div className=" w-full ">
                      <motion.div
                        className="w-full relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      >
                        <Image
                    src="/savadkooh.svg"
                    alt={dest.area_name}
                          width={400}
                          height={160}
                          className="rounded-lg w-full h-auto object-cover"
                        />
                        <motion.div
                          className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300"
                          whileHover={{ opacity: 0.3 }}
                          style={{ zIndex: 1 }}
                        />
                      </motion.div>
                    </div>
                  </div>
                  <div className="flex flex-row mb-3 justify-between mx-6">
                    <div className="text-center text-sm  font-semibold text-[#848484]">
                      50 مورد
                    </div>
                    <div className="text-center text-base font-semibold text-[#1E1E1E]">
                      {dest.area_name}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2" />
          <CarouselNext className="right-2 top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
    </div>
  );
};
export default VillaRental;
