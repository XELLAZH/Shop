import { Link } from "react-router-dom";

export default function AdminHeaderComponent() {
    return (
        <header className="w-100p h-20 pt-10 pr-25 pl-25 ">
            <nav className="flex justify-between items-center text-2xl text-cyan-300 border-b-2">
                <Link to="/admin/feedback" className="pb-4">Отзывы</Link>
                <Link to="/admin/popular" className="pb-4">Популярный раздел</Link>
                <Link to="/admin/bought-amount" className="pb-4">Количество купленных товаров</Link>
                <Link to="/admin/active-district" className="pb-4">Самый активный район</Link>
                <Link to="/admin/orders" className="pb-4">Заказы</Link>
            </nav>
        </header>
    )
}