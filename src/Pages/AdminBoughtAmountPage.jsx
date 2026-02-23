import AdminHeaderComponent from "../Components/AdminHeaderComponent";

export default function AdminFeedbackPage() {
    const data = [
        {
            "date": "2018-05-30 12:35:08",
            "message": "Всё супер"
        },
        {
            "date": "2018-05-30 12:35:20",
            "message": "Отличная Организация"
        },
    ]

    const tableRows = data.map(element => <tr className="border-t-1">
        <td>{element.date}</td>
        <td>{element.message}</td>
    </tr>)
    return (
        <>
            <AdminHeaderComponent />
            {/* <div className="flex w-[100vw] mt-10 pr-20 pr-25 pl-25">
                <table class="table-fixed flex-col w-[90vw] border-collapse">
                    <thead className="">
                        <tr className="">
                            <th class="flex">Дата посещения</th>
                            <th class="flex-col text-start">Мнение</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {tableRows}
                    </tbody>
                </table>
            </div> */}
            Пока в разработке
        </>
    )
}