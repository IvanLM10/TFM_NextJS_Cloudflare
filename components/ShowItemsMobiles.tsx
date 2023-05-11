//Componente que muestra los resultados de la página actual de moviles

import Image from 'next/image';

import styles from '@/styles/ShowItemsMobiles.module.css';

type Props = {
  data: any[];
};

const ShowItemsMobiles = ({ data }: Props) => (
  <div className={styles.grid}>
    {data.map((item) => (
      <div className={styles.item} key={item.id}>
        <Image 
          loader={({ src }) => {
            if (src.startsWith('https://')) {
              return src;
            } else {
              return `/images/${src}`;
            }
          }}
          className={styles.image} src={item.image} alt="Imagen móvil" width={170} height={170} priority/>
        <h3 className={styles.text}>{item.title}</h3>
        <p className={styles.p}>{item.price}</p>
      </div>
    ))}
  </div>
);

export default ShowItemsMobiles;