import { useState } from "react";
import HeaderComponent from "../Components/HeaderComponent";
import CartItem from "../Components/CartItem";
import ProductsNav from "../Components/ProductsNav";
import TextInputComponent from "../Components/TextInputComponent";
import { useCurrentUser } from "../Hooks/useCurrentUser";
import { createOrder } from "../Api/order/createOrder";

// Подгрузка из бд
export default function ProductsCabelsPage() {
  const { currentUser } = useCurrentUser();

  const [isLoading, setIsLoading] = useState(false);

  const [cart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) ?? [];
  });

  const [region, setRegion] = useState("");
  const [district, setDistrict] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    console.log(region);
    console.log(district);
    console.log(address);
    console.log(phoneNumber);
    console.log(comment);

    try {
      await createOrder(region, district, address, phoneNumber, comment, cart);
      alert("Вы успешно сделали заказ");

      setIsLoading(false);

      localStorage.clear();

      window.location.reload();
    } catch (error) {
      console.log(error);
      alert(error.response.data[0].description ?? "Unknown error");
    }
  };

  return (
    <>
      <HeaderComponent />
      <ProductsNav />
      <div className="flex flex-col w-[100vw] pb-4 pl-35">
        {currentUser ? (
          <>
            <p className="text-5xl font-normal mb-10">Заказ</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <TextInputComponent
                required
                label="Область"
                placeholder="Смоленская область"
                onChange={(e) => setRegion(e.target.value)}
                value={region}
              />
              <TextInputComponent
                required
                label="Район"
                placeholder="Ленинский район"
                onChange={(e) => setDistrict(e.target.value)}
                value={district}
              />
              <TextInputComponent
                required
                label="Адрес"
                placeholder="Николаева, 55"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
              <TextInputComponent
                required
                label="Телефон"
                placeholder="+79101234567"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
              />
              <TextInputComponent
                label="Комментарий к заказу"
                placeholder="Нет Комментариев"
                onChange={(e) => setComment(e.target.value)}
                value={comment}
              />

              <div className="flex ml-150 mb-20">
                {isLoading ? (
                  <h2 className="text-center">Loading...</h2>
                ) : (
                  <button className="border-2 border-gray-700 w-fit p-2 rounded-md mt-2 ml-10 cursor-pointer">
                    Сделать заказ
                  </button>
                )}
              </div>
            </form>
          </>
        ) : (
          <p className="text-center text-4xl font-normal mb-10">
            Чтобы сделать заказ войдите в аккаунт
          </p>
        )}

        <p className="text-5xl font-normal mb-10">Корзина</p>

        <div className="flex flex-col gap-5">
          {cart.length === 0 ? (
            <h2>Здесь ничего нет...</h2>
          ) : (
            cart.map((id) => <CartItem id={id} />)
          )}
        </div>
      </div>
    </>
  );
}
