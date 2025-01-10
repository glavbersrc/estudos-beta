import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Estudos Constantinianos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="styles.css" />
      </Head>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Image src="https://wmghedelx4.ufs.sh/f/7HHrZ60cb4rNfkBdKOrBjNFWPSDCd3wUTEi9Xa827hZObsVI" alt="Roman eagle" className={styles.eagle} width={80} height={80} />
          <h1 className={styles.title}>Estudos Constantinianos</h1>
          <Image src="https://wmghedelx4.ufs.sh/f/7HHrZ60cb4rNfkBdKOrBjNFWPSDCd3wUTEi9Xa827hZObsVI" alt="Roman eagle" className={styles.eagle2} width={80} height={80} />
        </div>
        <nav>
          <ul className={styles.navList}>
            <li><a href="#">Home</a></li>
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
          <h2>Blog Post Title</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
        </section>
      </main>
    </div>
  );
}