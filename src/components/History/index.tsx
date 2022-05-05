/* eslint-disable @next/next/no-img-element */
import styles from './style.module.scss'

export function History () {
    return (
        <section className={styles.history}>
            <img src="/img/ambience.jpg" alt="Ambiente"/>
            <div>
                <h2>Nossa história</h2>
                <p>Começamos no ano de 2003 em Santo André/SP com o restaurante Delphi, nossa primeira unidade. Esta unidade foi inspiração para o crescimento do restaurante como um todo, que desde então vem atraindo cada vez mais clientes dos mais diversos estados do Brasil.</p>
            </div>
        </section>
    )
}