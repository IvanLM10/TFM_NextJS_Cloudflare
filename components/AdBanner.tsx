import React from 'react';
import Image from 'next/image';

const AdBanner: React.FC = () => {
  try {
    return (
      <div style={{ paddingBottom: '100px' }}>
        <Image 
          loader={({ src }) => {
            if (src.startsWith('https://')) {
              return src;
            } else {
              return `/images/${src}`;
            }
          }}
          src="https://images.ctfassets.net/tzu1pd8bi7co/1Flr57WezrXCKPTdLqeWZB/9dd5b582d206c219c270d110f12e7c78/banner-home-tablet_2x.jpg?fm=webp&fit=scale&w=640&h=548" 
          alt="Banner Publicidad" 
          width={768} 
          height={658}
          priority
        /> 
      </div>
    );
  }
  catch (error) {
    return <div>No se pudo cargar el banner de publicidad.</div>;
  }
};
//alt: descripcion que se muestra en pantalla en caso de que no se pueda mostrar la imagen
export default AdBanner;
