import { useEffect, useState } from "react";
import { getCurrentUser } from "../Api/user/getCurrentUser";

export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCurrentUser = async () => {
    try {
      setIsLoading(true);

      const data = await getCurrentUser();
      setCurrentUser(data);

      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const clear = () => {
    setCurrentUser(null);
    setIsLoading(false);
  };

  return { currentUser, isLoading, clear };
};
