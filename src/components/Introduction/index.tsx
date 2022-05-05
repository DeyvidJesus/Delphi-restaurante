/* eslint-disable @next/next/no-img-element */
import styles from './style.module.scss'

export function Introduction () {
    return (
        <section className={styles.introduction}>
          <header>
            <nav>
              <a href="#">Home</a>
              <a href="#">História</a>
              <a href="#">Cardápio</a>
              <a href="#">Contato</a>
            </nav>
          </header>
          <h1>Delphi restaurante</h1>
          <div className={styles.container}>
            <p>Saiba mais</p>
            <a href='#'>
              <img src="/img/seta-para-baixo.png" alt="Seta para baixo" />
            </a>
          </div>
        </section>
    )
}