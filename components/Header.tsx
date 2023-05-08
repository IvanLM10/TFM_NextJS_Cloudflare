import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/Header.module.css';

const logo = "/images/masmovil_negro.png";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
        <div className={styles.top}>
          <div className={styles.left}>Particulares - Autónomos y Empresas</div>
          <div className={styles.right}>Si no eres cliente, llámanos gratis - 123 456 789</div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src={logo} alt="Logo MasMovil" width={139} height={35}/>
            </Link>
          </div>

          <div>
            <Link className={styles.link} href="/tarifas" rel="prerender">
              TARIFAS
            </Link>

            <Link className={styles.link} href="/moviles" rel="prerender">
              MÓVILES
            </Link>
          </div>

          <div className={styles.end}>
            <div className={styles.help}>
              Ayuda
            </div>
            <div className={styles.client}>
              <div>
                Soy Cliente
              </div>
            </div>
          </div>
        </div>
      </header>
    );
}

export default Header