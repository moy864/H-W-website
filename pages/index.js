import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thinking Forwards</title>
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
        <p> All content
                &copy; 2022 Divyakshi Goyal and Molly Jensen</p>
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
