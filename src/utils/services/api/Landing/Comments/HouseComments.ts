import httpServer from "@/utils/services/interceptor/httpServer";
import { Comment } from "@/types/Landing/Comments";
export const getHouseComment = async (): Promise<Comment[]> => {
    try {
      const result = await httpServer.get("/comments?page=1&limit=10&sort=&order=ASC");
  
      return result.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  