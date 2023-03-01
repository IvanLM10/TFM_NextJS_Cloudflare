//import { Inter } from 'next/font/google'

import PageHead from '@/components/PageHead';
import Header from '@/components/Header'
import Service from '@/components/Service'
import AdBanner from '../components/AdBanner';
import AdVideo from '../components/AdVideo';
import Footer from '@/components/Footer'

import styles from '@/styles/Home.module.css'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <PageHead
        title="TFM Next.js"
        description="Página web de TFM Next.js"
        keywords={['TFM', 'next.js', 'typescript']}
      />

      <Header />

      <main className={styles.main}>

        <Service />

        <AdBanner />

        <AdVideo />

      </main>

      <Footer />
    </>
  )
}
