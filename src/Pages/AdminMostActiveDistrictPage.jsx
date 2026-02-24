import AdminHeaderComponent from "../Components/AdminHeaderComponent";
import { useOrders } from "../Hooks/useOrders";

export default function AdminMostActiveDistrictPage() {
  const { orders } = useOrders();

  const aggregateDistricts = () => {
    const currentDistricts = {};

    orders.forEach((order) => {
      if (order.district in currentDistricts) {
        currentDistricts[order.district]++;
      } else {
        currentDistricts[order.district] = 1;
      }
    });

    return Object.entries(currentDistricts);
  };

  const tableRows = aggregateDistricts().map(([district, count]) => (
    <tr className="border-t-1">
      <td>{district}</td>
      <td>{count}</td>
    </tr>
  ));

  return (
    <>
      <AdminHeaderComponent />
      <div className="flex w-[100vw] mt-10 pr-20 pr-25 pl-25">
        <table class="table-fixed flex-col w-[90vw] border-collapse">
          <thead className="">
            <tr className="">
              <th class="flex">Район</th>
              <th class="flex-col text-start">
                Количество оборудования (штук)
              </th>
            </tr>
          </thead>
          <tbody className="">{tableRows}</tbody>
        </table>
      </div>
    </>
  );
}
