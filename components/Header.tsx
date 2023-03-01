import React from 'react'
import styles from '@/styles/Header.module.css';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <div className={styles.container}>
          <Link 
            href="/"
            rel="prerender"
        >
            <h1 className={styles.h1}>TFM</h1>
        </Link>
        </div>
    );
}

export default Header