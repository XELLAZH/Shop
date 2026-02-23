import HeaderComponent  from '../Components/HeaderComponent'
import ProductCardComponent from '../Components/ProductCardComponent';
import ProductsNav from '../Components/ProductsNav';
import testPhoto from '../assets/Money-Icon.svg'

// Подгрузка из бд
export default function ProductsFiresecurePage () {
    return (
        <>
            <HeaderComponent />
            <ProductsNav />
            <div className="flex w-[100vw] justify-center">
                Товары пока не добавлены
            </div>            
        </>
    )
}