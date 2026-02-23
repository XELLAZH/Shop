import { axiosInstance } from "../axiosInstance";

export const loginUser = async (email, password) => {
  const request = {
    email,
    password,
  };

  await axiosInstance.post("/users/login", request);
};
