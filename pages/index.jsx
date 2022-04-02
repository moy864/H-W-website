import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Thinking Forwards</title>
                <meta name="description" content="wellbeing website" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to<br /> <span className={styles.grad}> Thinking Forwards </span>
                </h1>

                <p className={styles.description}>
                    insert cringe slogan 
                </p>
            </main>
        </div>
    );
}

