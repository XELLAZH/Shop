import { axiosInstance } from "../axiosInstance";

export const updateProduct = async (
  id,
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

  await axiosInstance.put(`/products/${id}`, request);
};
