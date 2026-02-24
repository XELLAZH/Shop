import AdminHeaderComponent from "../Components/AdminHeaderComponent";
import { getAllReviews } from "../Api/review/getAllReviews";
import { useEffect, useState } from "react";

export default function AdminFeedbackPage() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getAllReviews().then((result) => setReviews(result));
  }, []);

  const tableRows = reviews.map((element) => (
    <tr className="border-t-1">
      <td>{new Date(element.createdOnUtc).toLocaleString()}</td>
      <td>{element.text}</td>
    </tr>
  ));

  return (
    <>
      <AdminHeaderComponent />
      <div className="flex w-[100vw] mt-10 pr-20 pr-25 pl-25">
        <table class="table-fixed flex-col w-[90vw] border-collapse">
          <thead className="">
            <tr className="">
              <th class="flex">Дата посещения</th>
              <th class="flex-col text-start">Мнение</th>
            </tr>
          </thead>
          <tbody className="">{tableRows}</tbody>
        </table>
      </div>
    </>
  );
}
