import { axiosInstance } from "../axiosInstance";

export const getAllOrders = async (userId) => {
  const request = {
    userId,
  };

  const response = await axiosInstance.get("/orders", { params: request });

  return response.data;
};
