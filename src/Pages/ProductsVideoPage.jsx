import HeaderComponent  from '../Components/HeaderComponent'
import ProductCardComponent from '../Components/ProductCardComponent';
import ProductsNav from '../Components/ProductsNav';
import testPhoto from '../assets/Money-Icon.svg'

// Подгрузка из бд
export default function ProductsVideoPage () {
    return (
        <>
            <HeaderComponent />
            <ProductsNav />
            <div className="flex w-[100vw] justify-center">
                <ProductCardComponent name="test-name" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, eveniet ipsum eligendi accusantium laborum culpa   exercitationem quam accusamus doloribus qui nesciunt tempora perspiciatis repellat aut inventore non, maiores doloremque praesentium?" photo={testPhoto} price="1234"/>
            </div>            
        </>
    )
}