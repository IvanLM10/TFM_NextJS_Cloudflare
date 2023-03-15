import React from 'react'
import styles from '@/styles/Header.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
        <div className={styles.top}>
          <div className={styles.left}>Particulares - Autónomos y Empresas</div>
          <div className={styles.right}>Si no eres cliente, llámanos gratis - 123 456 789</div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.logo}>
            <Link href="/" rel="prerender">
              <Image src="/images/masmovil_negro.png" alt="Logo Next.js" width={139} height={35}/>
            </Link>
          </div>

          <div className={styles.service}>
            <Link className={styles.link} href="/tarifas" rel="prerender">
              TARIFAS
            </Link>

            <Link className={styles.link} href="/moviles" rel="prerender">
              MÓVILES
            </Link>
          </div>
        </div>
      </header>
    );
}

export default Header