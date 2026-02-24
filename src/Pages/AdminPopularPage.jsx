import AdminHeaderComponent from "../Components/AdminHeaderComponent";
import { useProducts } from "../Hooks/useProducts";

export default function AdminPopularPage() {
  const { products } = useProducts();

  const categories = [
    "Видеонаблюдение",
    "Домофоны",
    "Кабеля",
    "Охранно-пожарная сигнализация",
  ];

  const aggregateCategories = () => {
    const categoriesCounts = new Array(4).fill(0);

    products.forEach(p => {
        categoriesCounts[p.groupNumber]++;
    });

    return categoriesCounts;
  }

  const tableRows = aggregateCategories().map((count, i) => (
    <tr className="border-t-1">
      <td>{categories[i]}</td>
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
              <th class="flex">Раздел</th>
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
