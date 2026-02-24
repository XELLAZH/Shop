import HeaderComponent from "../Components/HeaderComponent";
import ProductCardComponent from "../Components/ProductCardComponent";
import ProductsNav from "../Components/ProductsNav";
import { useProducts } from "../Hooks/useProducts";
import { useSearchParams } from "react-router-dom";

// Подгрузка из бд
export default function ProductsPage() {
  const [searchParams] = useSearchParams();

  const groupNumber = searchParams.get("groupNumber");

  const { products, isLoading } = useProducts(groupNumber ?? 0);

  return (
    <>
      <HeaderComponent />
      <ProductsNav />
      {isLoading && <h2 className="text-center">Loading...</h2>}
      <div className="flex flex-col w-[100vw] gap-4 justify-center items-center">
        {products.map((p) => (
          <ProductCardComponent
            key={p.id}
            id={p.id}
            name={p.name}
            description={p.description}
            photo={p.imageUrl}
            price={p.cost}
          />
        ))}
      </div>
    </>
  );
}
