import { axiosInstance } from "../axiosInstance";

export const deleteProduct = async (id) => {
  await axiosInstance.delete(`/products/${id}`);
};
