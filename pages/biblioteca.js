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
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Image src="/roman-eagle.png" alt="Roman eagle" className={styles.eagle} width={80} height={80} />
          <h1>Estudos Constantinianos</h1>
          <Image src="/roman-eagle.png" alt="Roman eagle" className={styles.eagle2} width={80} height={80} />
        </div>
        <nav>
          <ul className={styles.navList}>
            <li><a href="/">Home</a></li>
            <li><a href="#">Roma</a></li>
            <li><a href="#">Catolicismo Romano</a></li>
            <li><a href="#">Editora</a></li>
            <li><a href="#">Artigos</a></li>
            <li><a href="/biblioteca">Biblioteca</a></li>
            <li><a href="#">Vídeos</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <section className={styles.blogPost}>
          <h2>Biblioteca Estudos Constantinianos</h2>
          <p>Esta é a nossa biblioteca: <a href="https://archive.org/details/@estudos_constantinianos">visite aqui</a></p>
        </section>
      </main>
    </div>
  );
}