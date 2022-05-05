/* eslint-disable @next/next/no-img-element */
import styles from './style.module.scss'

export function Menu() {
    return (
        <section id='Menu' className={styles.menu}>
            <div className={styles.text}>
                <h2>Cardápio</h2>
                <p>Nosso menu foi criado pensando nas melhores opções para satisfazer nossos clientes independemente de seus gostos. Temos diversos pratos a sua disposição.</p>
            </div>
            <div className={styles.imageContainer}>
                <img src="/img/steak.jpg" alt="Prato do cardápio - bife" />
                <img src="/img/fish.jpg" alt="Prato do cardápio - peixe" />
                <div>
                    <a href='#'>
                        <div>
                            <h3>Conheça <br /> nosso <br /> menu</h3>
                        </div>
                    </a>
                </div>
                <img src="/img/salad.jpg" alt="Prato do cardápio - salada" />
            </div>
        </section>
    )
}