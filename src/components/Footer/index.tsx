/* eslint-disable @next/next/no-img-element */
import styles from './style.module.scss'

export function Footer () {
    return (
        <footer className={styles.footer}>
            <div>
                <a href="#Home"><img src="/img/seta-para-cima.png" alt="Seta para cima" /></a>
                <p>Voltar ao topo</p>
            </div>
        </footer>
    )
}