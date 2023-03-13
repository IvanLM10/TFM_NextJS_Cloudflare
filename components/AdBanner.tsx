import React from 'react';
import Image from 'next/image';

//quitar img; usar <Image />

const AdBanner: React.FC = () => {
  return (
    <div>
      <Image src="https://images.ctfassets.net/tzu1pd8bi7co/1Flr57WezrXCKPTdLqeWZB/9dd5b582d206c219c270d110f12e7c78/banner-home-tablet_2x.jpg?fm=webp&fit=scale&w=640&h=548" alt="Banner Advertisement" width={640} height={548}/> 
    </div>
  );
};
//alt: descripcion que se muestra en pantalla en caso de que no se pueda mostrar la imagen
export default AdBanner;
