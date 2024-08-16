import React from 'react';
import uuid from 'react-uuid';

const Pagination = ({ currentPage, charCount, setCurrentPage }) => {
  const totalPages = Math.ceil(charCount / 10);
  const Buttons = [];

  for (let i = 0; i < totalPages; i++) {
    const page = i + 1;
    Buttons.push(
      <button className={`pagination-button ${currentPage === page ? 'active-button' : ''}`} key={uuid()}
              onClick={() => setCurrentPage(page)}>
        {page}
      </button>,
    );
  }

  return (
    <div className={'pagination-wrapper'}>
      <div className={'pagination-container'}>{Buttons}</div>
    </div>
  );
};

export default Pagination;
