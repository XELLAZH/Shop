import { axiosInstance } from "../axiosInstance";

export const getProductById = async (id) => {
  const response = await axiosInstance.get(`/products/${id}`);

  return response.data;
};
