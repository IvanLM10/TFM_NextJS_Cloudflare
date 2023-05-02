import {useState, useEffect} from 'react'

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
  price: string;
  description1: string;
  description2: string;
};

const PER_PAGE = 9; // Elementos que se quieren mostrar por página
const totalCount = 23; // Elementos totales de tarifas en la API
const pageCount = Math.ceil(totalCount / PER_PAGE); // Nº de páginas necesarias

const getOffset = (page: number) => (page - 1) * PER_PAGE;

const Tarifas = () => {
  console.log("Renderizando Tarifas...");
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(`https://my-json-server.typicode.com/IvanLM10/json-server/tarifas?_limit=${PER_PAGE}&_start=${getOffset(currentPage)}`);
        if (!res.ok) {
          throw new Error('La respuesta de la red no fue correcta');
        }
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error('Error al obtener los elementos:', error);
      }
    };
    fetchItems();
  }, [currentPage]);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
  };

  return (
    <>
      <PageHead
        title="TFM Next.js: Tarifas"
        description="Página web de TFM Next.js"
        keywords={['TFM', 'next.js', 'tarifas']}
      />

      <Header />

      <main className={styles.main}>

        <h1 style={{ paddingTop: '35px', paddingBottom: '25px' }}>
          TARIFAS
        </h1>

        <div>
          <Items data={items} />
          <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
        </div>

      </main>

      <Footer />
    </>
  )
}

export default Tarifas