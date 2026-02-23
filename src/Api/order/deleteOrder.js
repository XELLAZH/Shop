import { axiosInstance } from "../axiosInstance";

export const deleteOrder = async (id) => {
  await axiosInstance.delete(`/orders/${id}`);
};
