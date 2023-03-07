import React from 'react'
import Link from 'next/link';
import styles from '@/styles/Service.module.css';

const Service: React.FC = () => {
  return (
    <div className={styles.div}>
        <Link //habilitar la navegación del lado del cliente entre páginas
            href="/tarifas"
            className={styles.card}
            //rel="noopener noreferrer"
            rel="prerender"
        >
            <h2 className={styles.text}>
              Tarifas
            </h2>
        </Link>

        <Link
            href="/moviles"
            className={styles.card}
            //rel="noopener noreferrer"
            rel="prerender"
        >
            <h2 className={styles.text}>
              Móviles
            </h2>
        </Link>
    </div>
  )
}

export default Service