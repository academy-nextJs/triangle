import Image from "next/image";
import estakhrdar from "/public/estakhrdar.png"
import aparteman from "/public/aparteman.png"
import bomgardi from "/public/bomgardi.png"
import colbeei from "/public/colbeei.png"
import saheli from "/public/saheli.png"
import vilaei from "/public/vilaei.png"
const categories = [
    { title: "استخر دار", image: "/estakhrdar.png" },
    { title: "ساحلی", image: "/saheli.png" },
    { title: "آپارتمانی", image: "/aparteman.png" },
    { title: "ویلا یی", image: "/vilaei.png" },
    { title: "بومگردی", image: "/bomgardi.png" },
    { title: "کلبه ای", image: "/colbeei.png" },
];

export default function CategoryGrid() {
  return (
    <div className="container mx-auto pt-28 px-4 py-8">
      <h2 className="text-2xl font-bold text-right mb-6">دسته بندی ها</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="relative h-[160px] rounded-3xl overflow-hidden shadow-lg group"
          >
            <Image
              src={cat.image}
              alt={cat.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-4 right-4 bg-black/50 text-white text-lg font-bold px-3 py-1 rounded-xl">
              {cat.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}