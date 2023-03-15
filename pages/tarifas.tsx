import React, {useState, useEffect} from 'react'

import PageHead from '@/components/PageHead'
import Header from '@/components/Header'
import Items from '@/components/ShowItemsTariffs'
import Pagination from '@/components/Pagination'
import Footer from '@/components/Footer'

import styles from '@/styles/Home.module.css'

// Los datos que posee tarifas en la API REST
type Item = {
  id: number;
  title: string;
  description1: string;
  description2: string;
  price: string;
};

const PER_PAGE = 2; // Elementos por página

const tarifas = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch('https://my-json-server.typicode.com/IvanLM10/json-server/tarifas');
      const data = await res.json();
      setItems(data);
    };
    fetchItems();
  }, []);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * PER_PAGE;
  const paginatedItems = items.slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(items.length / PER_PAGE);

  return (
    <>
      <PageHead
        title="TFM Next.js: Tarifas"
        description="Página web de TFM Next.js"
        keywords={['TFM', 'next.js', 'tarifas']}
      />

      <Header />

      <main className={styles.main}>

        <div>
          <h1>
            TARIFAS
          </h1>
        </div>

        <div>
          <Items data={paginatedItems} />
          <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
        </div>

      </main>

      <Footer />
    </>
  )
}

export default tarifas