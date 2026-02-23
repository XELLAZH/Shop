import AdminHeaderComponent from "../Components/AdminHeaderComponent";

export default function AdminPopularPage() {
    const data = [
        {
            "category": "Домофоны",
            "amount": 3
        },
        {
            "category": "Системы оповещения",
            "amount": 2
        },
        {
            "category": "Видеонаблюдение",
            "amount": 2
        },
        {
            "category": "Охрано-пожарная сигнализация",
            "amount": 2
        },
        {
            "category": "Кабеля",
            "amount": 2
        },
    ]

    const tableRows = data.map(element => <tr className="border-t-1">
        <td>{element.category}</td>
        <td>{element.amount}</td>
    </tr>)
    return (
        <>
            <AdminHeaderComponent />
            <div className="flex w-[100vw] mt-10 pr-20 pr-25 pl-25">
                <table class="table-fixed flex-col w-[90vw] border-collapse">
                    <thead className="">
                        <tr className="">
                            <th class="flex">Раздел</th>
                            <th class="flex-col text-start">Количество оборудования (штук)</th>
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