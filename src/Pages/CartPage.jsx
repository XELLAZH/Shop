import HeaderComponent  from '../Components/HeaderComponent'
import ProductCardComponent from '../Components/ProductCardComponent';
import ProductsNav from '../Components/ProductsNav';
import TextInputComponent from '../Components/TextInputComponent';
import testPhoto from '../assets/Money-Icon.svg'


// Подгрузка из бд
export default function ProductsCabelsPage () {
    const cart = []
    
    return (
        <>
            <HeaderComponent />
            <ProductsNav />
            <div className=" flex flex-col w-[100vw] pl-35">
                <p className='text-5xl font-normal mb-10'>Заказ</p>

                <form className="flex flex-col gap-5">
                    <TextInputComponent required label="Контактное лицо" placeholder="ФИО"/>                    
                    <TextInputComponent required label="Область" placeholder="Смоленская область"/>                    
                    <TextInputComponent required label="Район" placeholder="Ленинский район"/> 
                     
                    <TextInputComponent label="Адрес" placeholder="Николаева, 55"/>                  
                    <TextInputComponent required label="Телефон" placeholder="+79101234567"/>                  
                    <TextInputComponent label="Комментарий к заказу" placeholder="Нет Комментариев"/>

                    <div className="">
                        {cart.map(product => <ProductCardComponent name={product.name} photo={product.photo} price={product.price} description={product.description}/>)}
                    </div>
                    <button className='border-2 border-gray-700 w-fit p-2 rounded-md mt-2 ml-10 cursor-pointer'>Сделать заказ</button>
                </form>
            </div>           
        </>
    )
}