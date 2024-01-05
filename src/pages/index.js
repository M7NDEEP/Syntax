import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Hero from './Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>5ynTax</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <Hero/>
      </main>
    </>
  )
}
