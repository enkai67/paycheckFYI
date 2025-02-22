import React from 'react';
import '#styles/Pagination.css'; // Adjust this path if necessary

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  if (totalPages <= 0) return null;

  const generatePageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      // Display all pages if total is 5 or less.
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Near the beginning: currentPage 1, 2, or 3.
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } 
      // Near the end.
      else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } 
      // In the middle.
      else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }

    return pages;
  };

  return (
      <div className="pagination">
          {generatePageNumbers().map((page, index) =>
              page === '...' ? (
                  <span key={`ellipsis-${index}`} className="dots">
                      {page}
                  </span>
              ) : (
                  <button
                      key={`page-${page}`}
                      className={`page-icon ${page === currentPage ? 'active' : ''}`}
                      onClick={() => onPageChange(page)}
                  >
                      {page}
                  </button>
              )
          )}
      </div>
  );

};

export default Pagination;
