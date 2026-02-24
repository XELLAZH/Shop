import { useEffect, useState } from "react";
import AdminHeaderComponent from "../Components/AdminHeaderComponent";
import { getAllOrders } from "../Api/order/getAllOrders"

export default function AdminOrdersPage() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getAllOrders().then((result) => {
            setOrders(result)
        })
    }, [])

    const data = [
        {
            "contact": "Екатерина",
            "region": "Смоленская область",
            "district": "Заднепровский район",
            "adres": "ул. Фрунзе, д.9, кв. 153",
            "phone": "89152443232",
            "extra": "",
            "products": "AVC-305 (color PAL черная) видеопанель, 600твл. цветная, антивандальная, накладная с ИК подсветкой, УКП-7 трубка аудиодомофона, TSNC адаптер для подключения мониторов к этажному коммутатору, Ария БРО-М Блок речевого оповещения с функцией трансляции фоновой музыки, AC-D2101IR3 (3.6) 1Мп IP камера цилиндрическая уличная, Р2Р, Ик-30м, IP66, Полюс GSM TEPMO термодатчика два (внутренний и внешний), Кабель КСПЭВ 2х0,5 мм (бухта 200м, 500 м) ПАРИТЕТ",
            "price": 27590

        },
        {
            "contact": "Романовский Игорь Сергеевич",
            "region": "Смоленская область",
            "district": "Промышленный район",
            "adres": "ул. Шевченко, д.11, кв. 56",
            "phone": "89124566611",
            "extra": "",
            "products": "AC-D2101IR3 (3.6) 1Мп IP камера цилиндрическая уличная, Р2Р, Ик-30м, IP66",
            "price": 3790
        },
        {
            "contact": "Новиков Илья Андреевич",
            "region": "Смоленская область",
            "district": "Заднепровский район",
            "adres": "ул. Белая, д.13, кв. 31",
            "phone": "89124543232",
            "extra": "Доставку прошу выполнить быстрее",
            "products": "Полюс GSM TEPMO термодатчика два (внутренний и внешний)",
            "price": 3785
        },
        
    ]

    // const sumOfCosts = orders.map(element => element.lineItems.product.cost);
    // console.log(sumOfCosts);
    const tableRows = orders.map(element => <tr className="border-t-1">
        <td>{element.user.userName}</td>
        <td>{element.region}</td>
        <td>{element.district}</td>
        <td>{element.address}</td>
        <td>{element.phoneNumber}</td>
        <td>{element.comment}</td>
        <td>{element.lineItems.map((e) => `${e.product.name}, `)}</td>
        <td>{element.lineItems.reduce((sum, item) => (item.product?.cost ?? 0) + sum, 0)}</td>
    </tr>)
    return (
        <>
            <AdminHeaderComponent />
            <div className="flex w-[100vw] mt-10 pr-20 pr-25 pl-25">
                <table class="table-fixed flex-col w-[90vw] border-collapse">
                    <thead className="">
                        <tr className="">
                            <th class="flex">Контактное лицо</th>
                            <th class="flex-col text-start">Область</th>
                            <th class="flex-col text-start">Район</th>
                            <th class="flex-col text-start">Адрес</th>
                            <th class="flex-col text-start">Телефон</th>
                            <th class="flex-col text-start">Дополнительно</th>
                            <th class="flex-col text-start">Товары</th>
                            <th class="flex-col text-start">Сумма Товаров</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {tableRows}
                    </tbody>
                </table>
            </div>
        </>
    )
}