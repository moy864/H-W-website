import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Minding Matters</title>
        <meta name="description" content="wellbeing website" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Thinking Forwards!
        </h1>

        <p className={styles.description}>
          insert cringe slogan 
        </p>
      </main>

      <footer className={styles.footer}>
          <h1> All content
                &copy; 2022 Divyakshi Goyal and Molly Jensen</h1>
      </span>
      </footer>
    </div>
  )
}
