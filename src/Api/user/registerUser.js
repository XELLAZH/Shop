import { axiosInstance } from "../axiosInstance";

export const registerUser = async (name, email, password, role) => {
  const request = {
    name,
    email,
    password,
    role,
  };

  const response = await axiosInstance.post("/users/register", request);

  return response.data;
};
