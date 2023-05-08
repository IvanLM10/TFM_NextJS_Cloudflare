import React from 'react';
import Image, { ImageLoader } from 'next/image';

/*const normalizeSrc = (src: string) => {
  return src.startsWith('/') ? src.slice(1) : src;
};

const cloudflareLoader: ImageLoader = ({ src, width, quality }) => {
  const params = [`width=${width}`];
  if (quality) {
    params.push(`quality=${quality}`);
  }
  const paramsString = params.join(',');
  return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
};*/

const AdBanner: React.FC = () => {
  try {
    return (
      <div style={{ paddingBottom: '100px' }}>
        <Image 
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
