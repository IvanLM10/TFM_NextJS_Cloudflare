import React from 'react'
import Link from 'next/link';
import styles from '@/styles/Service.module.css';

interface ServiceProps {
    title: string;
  }

const Service: React.FC<ServiceProps> = ({title}) => {
  return (
    <div className={styles.div}>
        <Link
            href="/tarifas"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
        >
            <h2 className={styles.h2}>
              Tarifas 
            </h2>
        </Link>

        <Link
            href="/moviles"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
        >
            <h2 className={styles.h2}>
              Móviles
            </h2>
        </Link>
    </div>
  )
}

export default Service