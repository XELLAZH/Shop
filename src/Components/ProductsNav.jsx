import { Link } from "react-router-dom";

export default function ProductsNav() {
  const routes = [
    "Видеонаблюдение",
    "Домофоны",
    "Кабеля",
    "Охранно-пожарная сигнализация",
  ];

  return (
    <div className=" w-[100vw] h-20 pr-10 pl-25 flex justify-start gap-7 items-center text-gray-700">
      {routes.map((r, i) => (
        <Link key={i} to={`/products?groupNumber=${i}`}>
          {r}
        </Link>
      ))}
      <Link to="/cart">
        <img src="" alt="Корзина" />
      </Link>
    </div>
  );
}
