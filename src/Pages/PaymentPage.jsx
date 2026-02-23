import FooterComponent from '../Components/FooterComponent';
import HeaderComponent  from '../Components/HeaderComponent'
import ProductsNav from '../Components/ProductsNav';
import moneyIcon from '../assets/Money-Icon.svg'


function PaymentPage () {
    return (
        <div className="font-normal">
            <HeaderComponent />
            <ProductsNav />
            <div className="w100p min-h-[85vh] p-20 pl-70 pr-70 flex flex-col gap-3.5 text-xl">
                <p className='text-5xl font-medium'>Оплата</p>
                <div className="flex justify-center mt-20"><img src={moneyIcon} className='w-[20vw]' /></div>
                <p>Заказ можно получить в одном из наших филиалов либо выбрать доставку транспортной компанией до квартиры или в офис!</p>
                <p>Оплатить заказ вы можете любым удобным для вас способом:</p>

                <p><b>Наличный</b><br />Оплата наличными возможна у нас в офисах</p>
                <p><b>Пластиковые карты</b><br />В наших офисах</p>

            </div>
            <FooterComponent />
        </div>
    )
}
export default PaymentPage;