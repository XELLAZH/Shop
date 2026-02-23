import { axiosInstance } from "../axiosInstance";

export const getAllReviews = async () => {
    const response = await axiosInstance.get("/reviews");

    return response.data;
}