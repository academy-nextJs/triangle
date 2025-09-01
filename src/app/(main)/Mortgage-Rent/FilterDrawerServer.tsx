
'use client';
import dynamic from "next/dynamic";

const FilterDrawerClient = dynamic(() => import("../../../components/Mortgage-RentContainer/Filter/FilterDrawerClient"), {
  ssr: false,
});

export default function FilterDrawerServer() {
  return <FilterDrawerClient/>
}