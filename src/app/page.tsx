import { notFound } from "next/navigation";
import { TableMain } from "@/widgets/table/table-main/TableMain";
import { mockData } from "@/shared/data/mockData";
import type { ReferenceModel } from "@/shared/data/types";

export default async function Home(params: {
  params: object;
  searchParams: { page: string; search: string };
}) {
  const page = params.searchParams.page;
  const limit = 7;

  const filterDataPagination = (data: ReferenceModel[], page: string) => {
    const currentPage = page ? Number(page) : 1;
    return data.slice((currentPage - 1) * limit, currentPage * limit);
  };

  if (!mockData) return notFound;

  return (
    <>
      <TableMain
        referencesList={filterDataPagination(mockData, page)}
        totalCount={mockData.length}
        limit={limit}
      />
    </>
  );
}
