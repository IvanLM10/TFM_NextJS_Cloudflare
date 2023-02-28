import React from 'react'

import PageHead from '@/components/PageHead'
import Header from '@/components/Header'
import Service from '@/components/Service'
import Footer from '@/components/Footer'

import styles from '@/styles/Home.module.css'

const tarifas = () => {
  return (
    <>
      <PageHead
        title="TFM Next.js: Tarifas"
        description="Página web de TFM Next.js"
        keywords={['TFM', 'next.js', 'tarifas']}
      />

      <Header title="Header"/>

      <main className={styles.main}>

        <Service tarifas="Tarifas" moviles="Móviles"/>

        <div>
          <h1>
            Tarifas
          </h1>
        </div>

      </main>

      <Footer title="Footer" />

    </>
  )
}

export default tarifas