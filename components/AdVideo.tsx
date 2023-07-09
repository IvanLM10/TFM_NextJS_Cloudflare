import React from 'react';
import YouTube from 'react-youtube';

const AdVideo: React.FC = () => {
  try {
    return (
      <div>
        <YouTube videoId="8Pq-_dKtdBE" opts={{ origin: "https://tfm-nextjs-cloudflare.pages.dev/" }}/>
      </div>
    );
  } catch (error) {
    return <div>No se pudo cargar el video.</div>;
  }
};

export default AdVideo;