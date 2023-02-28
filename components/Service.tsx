import React from 'react'
import Link from 'next/link';
import styles from '@/styles/Service.module.css';

interface ServiceProps { // la interfaz "Props" define los dos parámetros que necesita el componente
    tarifas: string;
    moviles: string;
  }

const Service: React.FC<ServiceProps> = ({tarifas, moviles}) => {
  return (
    <div className={styles.div}>
        <Link //habilitar la navegación del lado del cliente entre páginas
            href="/tarifas"
            className={styles.card}
            //rel="noopener noreferrer"
            rel="prerender"
        >
            <h2 className={styles.text}>
              {tarifas} 
            </h2>
        </Link>

        <Link
            href="/moviles"
            className={styles.card}
            //rel="noopener noreferrer"
            rel="prerender"
        >
            <h2 className={styles.text}>
              {moviles}
            </h2>
        </Link>
    </div>
  )
}

export default Service