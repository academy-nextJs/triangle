import httpClient from "@/utils/services/interceptor/httpClient";

export const getAllhouses = async () => {
    try {
      const result = await httpClient.get("/houses");
  
      return result.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  