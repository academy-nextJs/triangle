"use client";

import Image from "next/image";

const SearchBar = () => {
  return (
    <div className="w-full relative">
      <input
        type="text"
        placeholder="...جست‌وجوکنید  "
        className="w-full rounded-xl font-medium text-base text-[#A6A6A6] font-[IranYekanRegular] border border-gray-300 px-8 py-3  text-right shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <div className="absolute right-[-2px] top-[12px] mr-2">
        <Image
        src="/search.svg"
        width={30}
        height={30}
        alt="search"
        
        />  </div>
      
    
    </div>
  );
};

export default SearchBar;