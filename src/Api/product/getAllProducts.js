import { axiosInstance } from "../axiosInstance";

export const getAllProducts = async (groupNumber, searchTerm = "") => {
  const request = {
    groupNumber,
    searchTerm,
  };

  const response = await axiosInstance.get("/products", { params: request });

  return response.data;
};
