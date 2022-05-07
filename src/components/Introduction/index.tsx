/* eslint-disable @next/next/no-img-element */
import { Header } from '../Header'
import styles from './style.module.scss'

export function Introduction () {
    return (
        <section id='Home' className={styles.introduction}>
          <Header />
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