import { transactionTypeMap, categoryMap, yardTypeMap } from "./filterMap";

export const mapFilters = (filters: any) => {
  const mappedFilters: any = {};

   if (filters.yardType)
    mappedFilters.yard_type = yardTypeMap[filters.yardType];

  if (filters.transactionType)
    mappedFilters.transaction_type = transactionTypeMap[filters.transactionType];

  if (filters.categorie)
    mappedFilters["categories.name"] = categoryMap[filters.categorie];

  // if (filters.yard_type)
  //   mappedFilters.yard_type = yardTypeMap[filters.yard_type];

  if (filters.capacity)
    mappedFilters.capacity = filters.capacity;

  if (filters.rooms)
    mappedFilters.rooms = filters.rooms;

  if (filters.priceMin)
    mappedFilters.priceMin = filters.priceMin;

  if (filters.priceMax)
    mappedFilters.priceMax = filters.priceMax;

  return mappedFilters;
};