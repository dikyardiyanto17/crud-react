import "../assets/pagination.css";
import React, { useState } from "react";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(5 / 2);

  let startPage, endPage;

  if (totalPages <= 5) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage <= 3) {
      startPage = 1;
      endPage = 5;
    } else if (currentPage + 1 >= totalPages) {
      startPage = totalPages - 4;
      endPage = totalPages;
    } else {
      startPage = currentPage - 2;
      endPage = currentPage + 2;
    }
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <ul className="pagination">
      <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`} onClick={() => setCurrentPage(currentPage - 1)}>
        <a href="#" className="page-link">
          Previous
        </a>
      </li>
      {startPage > 1 && (
        <li className="page-item">
          <a href="#" className="page-link">
            ...
          </a>
        </li>
      )}
      {pages.map((page) => (
        <li key={page} className={`page-item ${currentPage === page ? "active" : ""}`} onClick={() => setCurrentPage(page)}>
          <a href="#" className="page-link">
            {page}
          </a>
        </li>
      ))}
      {endPage < totalPages && (
        <li className="page-item">
          <a href="#" className="page-link">
            ...
          </a>
        </li>
      )}
      <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`} onClick={() => setCurrentPage(currentPage + 1)}>
        <a href="#" className="page-link">
          Next
        </a>
      </li>
    </ul>
  );
}
