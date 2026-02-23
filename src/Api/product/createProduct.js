import { axiosInstance } from "../axiosInstance";

export const createProduct = async (
  name,
  groupNumber,
  description,
  imageUrl,
  cost,
) => {
  const request = {
    name,
    groupNumber,
    description,
    imageUrl,
    cost,
  };

  const response = await axiosInstance.post("/products", request);

  return response.data;
};
