import { axiosInstance } from "../axiosInstance";

export const getOrderById = async (id) => {
  const response = await axiosInstance.get(`/orders/${id}`);

  return response.data;
};
