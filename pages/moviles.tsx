import React, {useState, useEffect} from 'react'

import PageHead from '@/components/PageHead'
import Header from '@/components/Header'
import Service from '@/components/Service'
import Items from '@/components/ShowItemsMobiles'
import Pagination from '@/components/Pagination'
import Footer from '@/components/Footer'

import styles from '@/styles/Home.module.css'

// Los datos que posee moviles en la API REST
type Item = {
  id: number;
  title: string;
  price: string;
};

const PER_PAGE = 2; // Elementos por página

const moviles = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch('https://my-json-server.typicode.com/IvanLM10/json-server/moviles');
      const data = await res.json(); // array de objetos que contiene los datos obtenidos de la API REST
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
        title="TFM Next.js: Móviles"
        description="Página web de TFM Next.js"
        keywords={['TFM', 'next.js', 'moviles']}
      />

      <Header />

      <main className={styles.main}>

        <div>
          <h1>
            MÓVILES
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

export default moviles