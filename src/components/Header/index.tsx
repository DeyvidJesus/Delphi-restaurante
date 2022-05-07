import styles from './style.module.scss'

export function Header() {
    return (
        <header className={styles.header}>
            <nav>
              <a href="#History">História</a>
              <a href="#Menu">Cardápio</a>
              <a href="#Location">Localização</a>
              <a href="#Contact">Contato</a>
            </nav>
          </header>
    )
}