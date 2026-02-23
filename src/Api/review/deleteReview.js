import { axiosInstance } from "../axiosInstance";

export const deleteReview = async (id) => {
  await axiosInstance.delete(`/reviews/${id}`);
};
