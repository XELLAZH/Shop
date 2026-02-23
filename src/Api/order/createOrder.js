import { axiosInstance } from "../axiosInstance";

export const createOrder = async (
  region,
  district,
  address,
  phoneNumber,
  comment,
  productIds,
) => {
  const request = {
    region,
    district,
    address,
    phoneNumber,
    comment,
    productIds,
  };

  const response = await axiosInstance.post("/orders", request);

  return response.data;
};
