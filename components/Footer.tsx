import React from 'react'
import styles from '@/styles/Footer.module.css';

interface FooterProps {
    title: string;
  }

const Footer: React.FC<FooterProps> = ({title}) => {
    return (
        <div className={styles.container}>
          <h1 className={styles.h1}>{title}</h1>
        </div>
    );
}

export default Footer