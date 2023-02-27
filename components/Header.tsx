import React from 'react'
import styles from '@/styles/Header.module.css';

interface HeaderProps {
    title: string;
  }

const Header: React.FC<HeaderProps> = ({title}) => {
    return (
        <div className={styles.container}>
          <h1 className={styles.h1}>{title}</h1>
        </div>
    );
}

export default Header