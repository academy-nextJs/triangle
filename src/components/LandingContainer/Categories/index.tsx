import { getcategories } from "@/utils/services/api/Landing/Categori/Categori";
// Images
import aparteman from "@/assets/landing/category/aparteman.png";
import estakhr from "@/assets/landing/category/estakhr.png";
import kolbe from "@/assets/landing/category/kolbei.png";
import Villa from "@/assets/landing/category/vilaii.png";
import Image from "next/image";
export interface categories {
  id: string;
  name: string;
}

export const CategoryGrid = async () => {
  const res = await getcategories();

  const posts: categories[] = await res;

  return (
    <div className=" grid justify-center pt-20 px-4 ">
      <h2 className="text-2xl font-bold text-right mb-6">دسته بندی ها</h2>
      <div className="grid   lg:grid-cols-2 xl:grid-cols-3  gap-4">
        {posts.map((data) => (
          <div
            key={data.id}
            className="relative h-[189px] w-[389px] rounded-3xl overflow-hidden shadow-lg group"
          >
            <Image
              src={
                data.name == "ویلا"
                  ? Villa.src
                  : data.name == "مسکونی"
                  ? estakhr.src
                  : data.name == "آپارتمان"
                  ? aparteman.src
                  : kolbe.src
              }
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
