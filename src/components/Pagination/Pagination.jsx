import { usePagination, DOTS } from "../../../hooks/usePagination";
import "./pagination.scss";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <section>
      <div className={`pagination-container ${className} `}>
        <button
          className={`pagination-button`}
          disabled={currentPage === 1}
          onClick={onPrevious}
        >
          <div className="arrow left" />
        </button>
        <p className={`pagination-number `}>
          {paginationRange.map((pageNumber, ind) => {
            if (pageNumber === DOTS) {
              return (
                <li key={ind} className="pagination-item dots">
                  &#8230;
                </li>
              );
            }
            return (
              <button
                key={ind}
                className={`pagination-item ${
                  pageNumber === currentPage && "selected"
                } `}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            );
          })}
        </p>

        <button
          className={`pagination-button`}
          disabled={currentPage === lastPage}
          onClick={onNext}
        >
          <div className="arrow right" />
        </button>
      </div>
    </section>
  );
};
export default Pagination;
