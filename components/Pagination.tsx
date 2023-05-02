// Componente para la paginación

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
        previousLabel="<"
        nextLabel=">"
        activeClassName={styles.active}
      />
    </ul>
  );
};

export default Pagination;


