import httpServer from "../../interceptor/httpServer";

export const getHouseDetail = async (id: string) => {
  const res = await httpServer.get(`/houses/${id}`);
  return res.data;
};
