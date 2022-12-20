import Pagination from "./Pagination/Pagination";
import data from "../../data/mock-data.json";
import "./style.scss";
import { useMemo, useState } from "react";

const PaginationTest = () => {
  const [rowPerPage, setRowPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * rowPerPage;
    const lastPageIndex = firstPageIndex + rowPerPage;

    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={rowPerPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};
export default PaginationTest;
