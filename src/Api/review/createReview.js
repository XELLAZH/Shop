import { axiosInstance } from "../axiosInstance";

export const createReview = async (address, text) => {
    const request = {
        address,
        text
    }

    const response = await axiosInstance.post("/reviews", request);

    return response.data;
}