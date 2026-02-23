import AdminHeaderComponent from "../Components/AdminHeaderComponent";

export default function AdminOrdersPage() {
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

    const tableRows = data.map(element => <tr className="border-t-1">
        <td>{element.contact}</td>
        <td>{element.region}</td>
        <td>{element.district}</td>
        <td>{element.adres}</td>
        <td>{element.phone}</td>
        <td>{element.extra}</td>
        <td>{element.products}</td>
        <td>{element.price}</td>

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