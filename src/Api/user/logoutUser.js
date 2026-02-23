import { axiosInstance } from "../axiosInstance";

export const logoutUser = async () => {
  await axiosInstance.post("/users/logout");
};
