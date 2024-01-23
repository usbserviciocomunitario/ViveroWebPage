import React, { useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import PropTypes from "prop-types";
import "./Pagination.scss";

export const Pagination = ({ data = [], handlePageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxProductsPerPage = 10;
  const totalPages = Math.ceil(data.length / maxProductsPerPage) || 1;

  const nextPage = (currentPage) => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      handlePageChange(getDataPerPage());
    }
  };

  const previousPage = (currentPage) => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      handlePageChange(getDataPerPage());
    }
  };

  const getDataPerPage = () => {
    const start = (currentPage - 1) * maxProductsPerPage;
    const end = start + maxProductsPerPage;
    return data.slice(start, end);
  };

  return (
    <div className="pager">
      <button
        disabled={currentPage === 1}
        onClick={() => previousPage(currentPage)}
        className="pager__arrow pager__arrow--left"
      >
        <IconChevronLeft />
        Anterior
      </button>
      <span>
        {currentPage} de {totalPages}
      </span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => nextPage(currentPage)}
        className="pager__arrow pager__arrow--right"
      >
        Siguiente
        <IconChevronRight />
      </button>
    </div>
  );
};

Pagination.propTypes = {
  data: PropTypes.array,
  handlePageChange: PropTypes.func,
};
