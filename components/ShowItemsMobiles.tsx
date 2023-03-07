//Componente que muestra los resultados de la página actual de moviles

import React from 'react';
import styles from '@/styles/ShowItemsMobiles.module.css';

type Props = {
  data: any[];
};

const ShowItemsTariffs = ({ data }: Props) => (
  <div className={styles.grid}>
    {data.map((item) => (
      <div className={styles.item} key={item.id}>
        <h3 className={styles.text}>{item.title}</h3>
        <br></br>
        <p className={styles.p}>{item.price}</p>
      </div>
    ))}
  </div>
);

export default ShowItemsTariffs;