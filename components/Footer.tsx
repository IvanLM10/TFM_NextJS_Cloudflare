import React from 'react'
import styles from '@/styles/Footer.module.css';

const Footer: React.FC = () => {
    return (
      <footer className={styles.footer}>
        <div>
          <h3>AYUDA</h3>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h3>REDES SOCIALES</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </footer>
    );
}

export default Footer