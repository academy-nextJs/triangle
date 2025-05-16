import axios from "axios";

export const getFilteredHouses = async (filters: any) => {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== "") {
      params.append(key, value as string);
    }
  });

  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/houses?${params.toString()}`);
  return res.data;
};