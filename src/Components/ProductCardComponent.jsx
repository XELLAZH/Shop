import { useState } from "react";

export default function ProductCardComponent(props) {
  const [cart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) ?? [];
  });

  const [inCart, setInCart] = useState(() => {
    const currentCart = JSON.parse(localStorage.getItem("cart")) ?? [];

    return currentCart.includes(props.id);
  });

  const addInCart = () => {
    localStorage.setItem("cart", JSON.stringify([...cart, props.id]));
    setInCart(true);
  };

  const deleteFromCart = () => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart.filter((item) => item !== props.id)),
    );
    setInCart(false);
  };

  if (inCart) {
    return (
      <div className="flex flex-col justify-center p-15 pt-10 rounded-md border-gray-700 border-2 items-center min-w-[60vw] max-w-[80vw] bg-gray-100">
        <p className="mb-8 text-2xl font-bold">{props.name}</p>
        <div className="flex justify-between gap-72">
          <div className="flex flex-row gap-100">
            <img src={props.photo} alt="product-photo" className="max-h-40" />
            <div className="">
              <p>Цена: {props.price} рублей</p>
              <button
                onClick={deleteFromCart}
                className="mt-3 border border-gray-700 p-1 pr-1.5 pl-1.5 rounded-sm cursor-pointer"
              >
                Удалить из корзины
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-center p-15 pt-10 rounded-md border-gray-700 border-2 items-center min-w-[60vw] max-w-[80vw] bg-gray-100">
        <p className="mb-8 text-2xl font-bold">{props.name}</p>
        <div className="flex justify-between gap-72">
          <div className="flex flex-col gap-10">
            <img src={props.photo} alt="product-photo" className="max-h-32" />
            <div className="">
              <p>Цена: {props.price} рублей</p>
              <button
                onClick={addInCart}
                className="mt-3 border border-gray-700 p-1 pr-1.5 pl-1.5 rounded-sm cursor-pointer"
              >
                Добавить в корзину
              </button>
            </div>
          </div>
          <div className="max-w-[18vw] text-wrap">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
