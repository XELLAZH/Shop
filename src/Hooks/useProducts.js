import { useEffect, useState } from "react";
import { getAllProducts } from "../Api/product/getAllProducts";

export const useProducts = (groupNumber) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);

      const data = await getAllProducts(groupNumber);
      setProducts(data);

      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [groupNumber]);

  const clear = () => {
    setProducts([]);
    setIsLoading(false);
  };

  return { products, isLoading, clear };
};
