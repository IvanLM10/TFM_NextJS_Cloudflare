//Componente que muestra los resultados de la página actual

import styles from '@/styles/ShowItemsTariffs.module.css';

type Props = {
  data: any[];
};

const ShowItemsTariffs = ({ data }: Props) => (
  <div className={styles.grid}>
    {data.map((item) => (
      <div className={styles.item} key={item.id}>
        <div className={styles.top}>
          <h3 className={styles.text}>{item.title}</h3>
          <div className={styles.price}>
            <p className={styles.p}>{item.price}</p>
          </div>
        </div>

        <div>
          <p className={styles.description}>{item.description1}</p>
          <p className={styles.description}>{item.description2}</p>
        </div>
      </div>
    ))}
  </div>
);

export default ShowItemsTariffs;