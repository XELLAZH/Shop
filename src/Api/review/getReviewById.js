import { axiosInstance } from "../axiosInstance";

export const getReviewById = async (id) => {
  const response = await axiosInstance.get(`/reviews/${id}`);

  return response.data;
};
