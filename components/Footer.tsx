import React from 'react'
import Image from 'next/image';

import styles from '@/styles/Footer.module.css';

const logo = "/images/masmovil_amarillo.jpg";

const Prueba: React.FC = () => {
    return (
      <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>

          <div className={styles.col}>
            <h3 className={styles.h3}>TARIFAS MÁS BUSCADAS</h3>
            <p className={styles.p}>
              Fibra Óptica 300Mb y Móvil 30GB<br />
              Mejor oferta fibra 300Mb y 50GB<br />
              Solo fijo<br />
              Mejor tarifa fibra 600Mb y 30GB<br />
              Tarifa móvil ilimitada 50GB<br />
              Fibra óptica 300Mb<br />
              Móvil prepago 80GB
            </p>
          </div>

          <div className={styles.col}>
            <h3 className={styles.h3}>AYUDA</h3>
            <p className={styles.p}>
              Configura internet móvil<br />
              Consultar factura electrónica<br />
              Configurar el router<br />
              Cómo activar el roaming<br />
              Activar el buzón de voz<br />
              Cambiar contraseña wifi<br />
              Opiniones MÁSMÓVIL
            </p>
          </div>

          <div className={styles.col}>
            <h3 className={styles.h3}>MÁS SERVICIOS</h3>
            <p className={styles.p}>
              Roaming<br />
              Amplia tus datos<br />
              Precios internacionales<br />
              Precios números especiales<br />
              App MÁSMÓVIL<br />
              Cobertura fibra óptica<br />
              Mapa de cobertura móvil
            </p>
          </div>

          <div className={styles.col}>
            <h3 className={styles.h3}>DISTRIBUIDORES</h3>
            <p className={styles.p}>
              Acceso distribuidores<br />
              Hazte distribuidor
            </p>
          </div>

          <div className={styles.col}>
            <h3 className={styles.h3}><Image src={logo} alt="Logo MasMovil" width={200} height={50}/></h3>
            <h3 className={styles.h3}>Recargas</h3>
            <h3 className={styles.h3}>Tiendas MÁSMÓVIL</h3>
            <h3 className={styles.h3}>Contacto</h3>
            <h3 className={styles.h3}>Móviles baratos</h3>
            <h3 className={styles.h3}>Acceso área de clientes</h3>
          </div>

        </div>
      </div>
    </footer>       
    );
}

export default Prueba