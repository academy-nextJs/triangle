import { useQuery } from "@tanstack/react-query";
import { getFilteredHouses } from "../services/api/HouseMortgage/HouseMortgage";
import { mapFilters } from "../helper/Filter/mapFilter";

export const useFilteredHouses = (filters: any) => {
  const mapped = mapFilters(filters);
  console.log("Mapped Filters:", mapped);

  return useQuery({
    queryKey: ["filteredHouses", mapped],
    queryFn: () => getFilteredHouses(mapped),
    enabled: !!Object.keys(mapped).length,
  });

};