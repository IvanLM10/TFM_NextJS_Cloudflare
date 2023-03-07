// Componente para la paginación

import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from '@/styles/Pagination.module.css';

type Props = {
  pageCount: number;
  onPageChange: ({ selected }: { selected: number }) => void;
};

const Pagination = ({ pageCount, onPageChange }: Props) => {
  return (
    <ul className={styles.pagination}>
      <ReactPaginate
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={onPageChange}
        containerClassName="pagination__container"
        activeClassName="pagination__link--active"
        pageClassName="pagination__item"
        pageLinkClassName="pagination__link"
      />
    </ul>
  );
};

export default Pagination;


