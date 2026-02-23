import { Link } from "react-router-dom";
import { useCurrentUser } from "../Hooks/useCurrentUser";
import LogoutButton from "./LogoutButton";

function HeaderComponent() {
  const { currentUser } = useCurrentUser();

  return (
    <div className="bg-gray-700 w100p h-20 pr-20 pl-20 text-white flex justify-between items-center">
      <p className="text-4xl">ООО "СББ"</p>
      <nav className="text-gray-400 flex gap-5.5">
        <Link to="/">Об организации</Link>
        <Link to="/contacts">Контакты</Link>
        <Link to="/payment-info">Оплата</Link>
        <Link to="/delivery-info">Доставка</Link>
        <Link to="/feedback">Оставить отзыв</Link>
      </nav>
      <div className="flex flex-row gap-2">
        {currentUser ? (
          <LogoutButton />
        ) : (
          <>
            <Link to="/register">
              <button className="border-2 pt-2 pb-2 pr-3 pl-3 rounded-md cursor-pointer">
                Регистрация
              </button>
            </Link>
            <Link to="/login">
              <button className="border-2 pt-2 pb-2 pr-3 pl-3 rounded-md cursor-pointer">
                Вход
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
export default HeaderComponent;
