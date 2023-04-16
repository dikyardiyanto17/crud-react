import "../assets/pagination.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../stores/action/actionCreator";

export default function Pagination() {
  const totalItems = useSelector((state) => state.users.totalItems);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / 10);

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
      <li
        className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
        onClick={() => {
          setCurrentPage(currentPage - 1);
          setTimeout(() => {
            dispatch(getUsers(currentPage * 10));
          }, 1000);
        }}
      >
        <span style={{cursor: 'pointer'}} className="page-link">
          Previous
        </span>
      </li>
      {startPage > 1 && (
        <li className="page-item">
          <span style={{cursor: 'pointer'}} className="page-link">
            ...
          </span>
        </li>
      )}
      {pages.map((page, index) => (
        <li
          key={page}
          className={`page-item ${currentPage === page ? "active" : ""}`}
          onClick={() => {
            setCurrentPage(page);
            setTimeout(() => {
              dispatch(getUsers((page-1) * 10));
            }, 1000);
          }}
        >
          <span style={{cursor: 'pointer'}} className="page-link">
            {page}
          </span>
        </li>
      ))}
      {endPage < totalPages && (
        <li className="page-item">
          <span style={{cursor: 'pointer'}} className="page-link">
            ...
          </span>
        </li>
      )}
      <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`} onClick={() => {
        setCurrentPage(currentPage + 1)
        setTimeout(() => {
          dispatch(getUsers(currentPage * 10));
        }, 1000);
      }
        }>
        <span style={{cursor: 'pointer'}} className="page-link">
          Next
        </span>
      </li>
    </ul>
  );
}
