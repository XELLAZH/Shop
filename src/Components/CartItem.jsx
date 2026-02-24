import { useProduct } from "../Hooks/useProduct";
import ProductCardComponent from "./ProductCardComponent";

export default function CartItem({ id }) {
  const { product, isLoading } = useProduct(id);

  if (isLoading) {
    return <h2 className="text-center">Loading...</h2>;
  }

  return (
    <>
      <ProductCardComponent
        id={product.id}
        name={product.name}
        description={product.description}
        photo={product.imageUrl}
        price={product.cost}
      />
    </>
  );
}
