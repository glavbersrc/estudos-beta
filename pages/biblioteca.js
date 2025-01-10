import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/home.module.css';

export default function Biblioteca() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Biblioteca Estudos Constantinianos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="styles.css" />
      </Head>
      <div className={styles.bodyContainer}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <Image src="/roman-eagle.png" alt="Roman eagle" className={styles.eagle} width={80} height={80} />
            <h1 className={styles.title}>Estudos Constantinianos</h1>
            <Image src="/roman-eagle.png" alt="Roman eagle" className={styles.eagle2} width={80} height={80} />
          </div>
          <nav>
            <ul className={styles.navList}>
              <li><a href="/">Home</a></li>
              <li><a href="#">Roma</a></li>
              <li><a href="#">Catolicismo Romano</a></li>
              <li><a href="#">Editora</a></li>
              <li><a href="#">Artigos</a></li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}