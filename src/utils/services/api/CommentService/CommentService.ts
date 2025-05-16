import httpClient from "../../interceptor/httpClient";

export type CreateCommentPayload = {
  title: string;
  caption: string;
  rating: number;
  parent_comment_id?: string | null;
};

export const createComment = async (
  houseId: string,
  data: CreateCommentPayload
) => {
  const res = await httpClient.post(`/houses/${houseId}/comments`, {
    ...data,
    parent_comment_id: data.parent_comment_id || null,
  });

  return res.data;
};

export const getHouseComments = async (houseId: string) => {
  const res = await httpClient.get(`/houses/${houseId}/comments`);
  return res.data;
};

export const postHouseComment = async (
  houseId: string,
  data: {
    title: string;
    caption: string;
    rating: number;
    parent_comment_id: string | null;
  }
) => {
  const res = await httpClient.post(`/houses/${houseId}/comments`, data);
  return res.data;
};
