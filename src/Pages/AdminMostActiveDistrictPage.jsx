import AdminHeaderComponent from "../Components/AdminHeaderComponent";

export default function AdminMostActiveDistrictPage() {
    const data = [
        {
            "district": "Заднепровский район",
            "amount": 10
        },
        {
            "district": "Промышленный район",
            "amount": 1
        },
        
    ]

    const tableRows = data.map(element => <tr className="border-t-1">
        <td>{element.district}</td>
        <td>{element.amount}</td>
    </tr>)
    return (
        <>
            <AdminHeaderComponent />
            <div className="flex w-[100vw] mt-10 pr-20 pr-25 pl-25">
                <table class="table-fixed flex-col w-[90vw] border-collapse">
                    <thead className="">
                        <tr className="">
                            <th class="flex">Район</th>
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