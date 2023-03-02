import React from 'react'
import styles from '@/styles/Header.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <div className={styles.container}>
            <Link 
                href="/"
                rel="prerender"
            >
                <Image src="images/next.svg" alt="Logo Next.js" width={300} height={85}/>
            </Link>
        </div>
    );
}

export default Header