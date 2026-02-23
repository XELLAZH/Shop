import { axiosInstance } from "../axiosInstance";

export const getCurrentUser = async () => {
  const response = await axiosInstance.get("/users/current");

  return response.data;
};
