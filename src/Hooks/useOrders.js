import { useEffect, useState } from "react";
import { getAllOrders } from "../Api/order/getAllOrders";

export const useOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);

      const data = await getAllOrders();
      setOrders(data);

      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const clear = () => {
    setOrders([]);
    setIsLoading(false);
  };

  return { orders, isLoading, clear };
};
