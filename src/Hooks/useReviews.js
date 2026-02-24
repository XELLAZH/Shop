import { useEffect, useState } from "react";
import { getAllReviews } from "../Api/review/getAllReviews";

export const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchReviews = async () => {
    try {
      setIsLoading(true);

      const data = await getAllReviews();
      setReviews(data);

      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const clear = () => {
    setReviews([]);
    setIsLoading(false);
  };

  return { reviews, isLoading, clear };
};
