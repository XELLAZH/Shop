import HeaderComponent  from '../Components/HeaderComponent'
import ProductCardComponent from '../Components/ProductCardComponent';
import ProductsNav from '../Components/ProductsNav';
import TextInputComponent from '../Components/TextInputComponent';
import testPhoto from '../assets/Money-Icon.svg'


// Подгрузка из бд
export default function ProductsCabelsPage () {
    const cart = [
        {
            name: "AC-D2101IR3 (3.6) 1Mп IP камера цилиндрическая уличная, Р2Р, Ик-30м, IP66",
            photo: "",
            price: 3790
        },
        {
            name: "DP400-TD16, Блок вызова домофона",
            photo: "",
            price: 4572
        },
        {
            name: "Кабель КСПВ 4х0,5 мм (бухта 200м) ПАРИТЕТ",
            photo: "",
            price: 1298
        },
        {
            name: "AVC-305 (color PAl чёрная) видеопанель, 600твл. цветная, антивандальная, накладная с ИК подсветкой",
            photo: "",
            price: 2065
        },
    ]
    
    return (
        <>
            <HeaderComponent />
            <ProductsNav />
            <div className=" flex flex-col w-[100vw] pl-35">
                <p className='text-5xl font-normal mb-10'>Заказ</p>

                <form className="flex flex-col gap-5">
                    <TextInputComponent required label="Область" placeholder="Смоленская область"/>                    
                    <TextInputComponent required label="Район" placeholder="Ленинский район"/> 
                     
                    <TextInputComponent label="Адрес" placeholder="Николаева, 55"/>                  
                    <TextInputComponent required label="Телефон" placeholder="+79101234567"/>                  
                    <TextInputComponent label="Комментарий к заказу" placeholder="Нет Комментариев"/>

                    <div className="flex flex-col gap-5">
                        {cart.map(product => <ProductCardComponent inCart name={product.name} photo={product.photo} price={product.price}/>)}
                    </div>
                    <div className="flex ml-150 mb-20">
                        <button  className='border-2 border-gray-700 w-fit p-2 rounded-md mt-2 ml-10 cursor-pointer'>Сделать заказ</button>
                    </div>
                </form>
            </div>           
        </>
    )
}