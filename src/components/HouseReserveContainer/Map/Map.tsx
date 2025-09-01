"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const TheMap = dynamic(() => import("./MainMap"), {
  ssr: false,
  loading: () => <p>در حال بارگذاری نقشه...</p>,
});

const Map = () => {
  return (
    <div className="w-full h-full bg-gray-100 rounded-r-4xl shadow-sm flex items-center justify-center text-gray-500">
      <Suspense fallback={<p>در حال بارگذاری...</p>}>
        <TheMap />
      </Suspense>
    </div>
  );
};

export default Map;
