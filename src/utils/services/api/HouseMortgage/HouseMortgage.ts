import axios from "axios";
import { House ,FilterParams } from "@/types/HouseMortgage/getHouse";

export async function getFilteredHouses(params?: FilterParams): Promise<House[]> {
  const query = new URLSearchParams();

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        query.append(key, String(value));
      }
    });
  }

  const response = await axios.get<House[]>(
   ` ${process.env.NEXT_PUBLIC_BASE_URL}/houses?${query.toString()}`
  );

  return response.data;
}