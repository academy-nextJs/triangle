import httpClient from "@/utils/services/interceptor/httpClient";

export const getcategories = async () => {
    try {
      const result = await httpClient.get("/categories");
  
      return result.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  