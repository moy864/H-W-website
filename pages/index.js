import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Minds Matter</title>
        <meta name="description" content="wellbeing website" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Minds Matter!
        </h1>

        <p className={styles.description}>
          "This website was developed by Div Goyal and Molly Jensen to explain ways you can help your own mental wellbeing. Have a look around to learn more"
        </p>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>

  )
}
