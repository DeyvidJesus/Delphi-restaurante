/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/Home.module.css'

export function Introduction () {
    return (
        <section className={styles.introduction}>
          <header className={styles.header}>
            <nav className={styles.nav}>
              <a href="#">Home</a>
              <a href="#">História</a>
              <a href="#">Cardápio</a>
              <a href="#">Contato</a>
            </nav>
          </header>
          <h1 className={styles.title}>Delphi restaurante</h1>
          <div className={styles.container}>
            <p className={styles.text}>Saiba mais</p>
            <a href='#' className={styles.link}>
              <img src="/img/seta-para-baixo.png" alt="Seta para baixo" />
            </a>
          </div>
        </section>
    )
}