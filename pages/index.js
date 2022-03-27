import Head from 'next/head'
import Image from 'next/image'
import './styles/tailwind.css';
import styles from '../styles/Home.module.css'
import { Navbar } from '../components/navbar.jsx';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thinking Forwards</title>
        <meta name="description" content="wellbeing website" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to<br />
            <span className={styles.grad}>
                         Thinking Forwards          
            </span>
        </h1>

        <p className={styles.description}>
          insert cringe slogan 
        </p>
      </main>

      <footer className={styles.footer}>
        <p> All content
                &copy; 2022  Divyakshi Goyal and Molly Jensen</p>
      </footer>
    </div>
  )
}
