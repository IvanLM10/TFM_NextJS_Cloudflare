//Componente que muestra los resultados de la página actual

import React from 'react';
import styles from '@/styles/ShowItemsTariffs.module.css';

type Props = {
  data: any[];
};

const ShowItemsTariffs = ({ data }: Props) => (
  <div className={styles.grid}>
    {data.map((item) => (
      <div className={styles.item} key={item.id}>
        <h3 className={styles.text}>{item.title}</h3>
        <p><br></br>{item.description1}</p>
        <p><br></br>{item.description2}</p>
        <p className={styles.p}><br></br>{item.price}</p>
      </div>
    ))}
  </div>
);

export default ShowItemsTariffs;