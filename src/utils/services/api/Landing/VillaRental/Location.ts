import httpClient from "@/utils/services/interceptor/httpClient";

export const getLocation = async () => {
    try {
      const result = await httpClient.get("/locations");
  
      return result.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  