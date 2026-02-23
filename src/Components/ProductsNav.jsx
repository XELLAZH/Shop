import { Link } from "react-router-dom";

export default function ProductsNav() {
    return (
        <div className=" w-[100vw] h-20 pr-10 pl-25 flex justify-start gap-7 items-center text-gray-700">
            <Link to="/products/video">Видеонаблюдение</Link>
            <Link to="/products/doorphones">Домофоны</Link>
            <Link to="/products/cabels">Кабеля</Link>
            <Link to="/products/firesecure">Охранно-пожарная сигнализация</Link>
            <Link to="/cart"><img src="" alt="Корзина" /></Link>
        </div>
    )
}