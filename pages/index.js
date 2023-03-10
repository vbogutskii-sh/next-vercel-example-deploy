import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Counter from './Counter';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>1112 Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Counter />

      </main>


    </div>
  )
}
