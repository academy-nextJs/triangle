"use client";
import { getcategories } from "@/utils/services/api/Landing/Categori/Categori";
// import { getcategories } from "@/utils/services/api/Landing/Categori/Categori";
import { da } from "date-fns/locale";
import Image from "next/image";
import { useEffect, useState } from "react";
export interface categories {
  id: string;
  name: string;
}
const categories = [
  { id: "1", name: "استخر دار", image: "/estakhrdar.png" },
  { id: "2", name: "ساحلی", image: "/saheli.png" },
  { id: "3", name: "آپارتمانی", image: "/aparteman.png" },
  { id: "4", name: "ویلا یی", image: "/vilaei.png" },
  { id: "5", nsme: "بومگردی", image: "/bomgardi.png" },
  { id: "6", name: "کلبه ای", image: "/colbeei.png" },
];

export const CategoryGrid = () => {
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   fetch("https://delta-project.liara.run/categories")
  //     .then(res => res.json())
  //     .then(setData)

  //   }, [])

  //   console.log(data,"sss");

  const [destinations, setDestinations] = useState<categories[]>([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await getcategories();
        if (Array.isArray(response)) {
          const data = response.map((item) => ({
            id: item.id,
            name: item.name,
          }));
          setDestinations(data);
        }
      } catch (error) {
        console.error("Failed to fetch destinations:", error);
      }
    };
    
    
    fetchDestinations();
  }, []);

  return (
    <div className=" grid justify-center pt-20 px-4 ">
      <h2 className="text-2xl font-bold text-right mb-6">دسته بندی ها</h2>
      <div className="grid   lg:grid-cols-2 xl:grid-cols-3  gap-4">
        {categories.map((data) => (
          <div
            key={data.id}
            className="relative h-[189px] w-[389px] rounded-3xl overflow-hidden shadow-lg group"
          >
            <Image
              src={data.image}
              alt={data.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-4 right-4 bg-black/50 text-white text-lg font-bold px-3 py-1 rounded-xl">
              {data.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
