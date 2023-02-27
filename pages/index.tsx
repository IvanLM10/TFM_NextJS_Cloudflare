import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'

import { Inter } from 'next/font/google'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>TFM Next.js</title>
        <meta name="description" content="TFM Next.js" /> //Descripción para los motores de búsqueda
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Header" />

      <main className={styles.main}>

        <div className={styles.grid}>

          <Link
            href="/tarifas"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Tarifas 
            </h2>
          </Link>

          <Link
            href="/moviles"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Móviles
            </h2>
          </Link>

        </div>

        <div>
          <h1>
            Banner publicidad
          </h1>
        </div>

        <div>
          <h1>
            Vídeo promoción
          </h1>
        </div>

      </main>

      <Footer title="Footer" />
    </>
  )
}
