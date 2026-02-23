import FooterComponent from '../Components/FooterComponent';
import HeaderComponent  from '../Components/HeaderComponent'
import moneyIcon from '../assets/Money-Icon.svg'


function DeliveryPage () {
    return (
        <div className="font-normal">
            <HeaderComponent />
            <div className="w100p min-h-[85vh] p-20 pl-70 pr-70 flex flex-col gap-3.5 text-xl">
                <p className='text-5xl font-medium'>Доставка</p>
                <div className="flex justify-center mt-20"><img src="" className='w-[20vw]' /></div>
                <p>Доставка заказов <b className='text-red-500 font-bold'>Центр-СБ</b> осуществляется во все регионы России. Доставка до терминала бесплатная.</p>
                
                <p className='font-bold'>Доставка по Смоленску и Смоленской области.</p>

                <p>Вы можете воспользоваться доставкой по городу Тюмени. Мы имеем собственную службу доставки. Доставка осуществляется после оплаты заказа в течении 1-2-х дней.</p>
                <p>Стоимость доставки 400 рублей при покупке на сумму менее 15 000 рублей. От 15 000 рублей доставка осуществляется бесплатно.</p>

            </div>
            <FooterComponent />
        </div>
    )
}
export default DeliveryPage;