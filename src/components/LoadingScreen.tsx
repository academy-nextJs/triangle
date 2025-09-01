"use client";

export function LoadingScreen() {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center z-50"
      dir="rtl"
    >
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 border-5 border-blue-200 border-t-transparent rounded-full animate-spin-slow" />
        <div className="absolute inset-2 border-5 border-red-200 border-t-transparent rounded-full animate-spin-medium" />
        <div className="absolute inset-4 border-5 border-green-200 border-t-transparent rounded-full animate-spin-fast" />
      </div>
      <p className="mt-6 text-gray-600 text-sm font-bold">
        کمی صبر کنید، در حال بارگذاری...
      </p>

      <style jsx>{`
        @layer utilities {
          .animate-spin-slow {
            animation: spin 3s linear infinite;
          }
          .animate-spin-medium {
            animation: spin 1.5s linear infinite;
          }
          .animate-spin-fast {
            animation: spin 0.8s linear infinite;
          }
        }
      `}</style>
    </div>
  );
}
