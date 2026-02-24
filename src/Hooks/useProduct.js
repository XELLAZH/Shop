import { useEffect, useState } from "react";
import { getProductById } from "../Api/product/getProductById";

export const useProduct = (id) => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);

      const data = await getProductById(id);
      setProduct(data);

      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [id]);

  const clear = () => {
    setProduct(null);
    setIsLoading(false);
  };

  return { product, isLoading, clear };
};
