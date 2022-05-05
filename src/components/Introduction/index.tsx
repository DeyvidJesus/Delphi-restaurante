/* eslint-disable @next/next/no-img-element */
import styles from './style.module.scss'

export function Introduction () {
    return (
        <section id='Home' className={styles.introduction}>
          <header>
            <nav>
              <a href="#Home">Home</a>
              <a href="#History">História</a>
              <a href="#Menu">Cardápio</a>
              <a href="#Contact">Contato</a>
            </nav>
          </header>
          <h1>Delphi restaurante</h1>
          <div className={styles.container}>
            <p>Saiba mais</p>
            <a href='#History'>
              <img src="/img/seta-para-baixo.png" alt="Seta para baixo" />
            </a>
          </div>
        </section>
    )
}