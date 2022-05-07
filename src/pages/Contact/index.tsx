import { Header } from "../../components/Header"
import styles from './style.module.scss'

export default function Contact() {
    return (
        <>
            <Header />
            <main className={styles.container}>
                <div className={styles.textContainer}>
                    <h1>Gostaria de falar conosco?</h1>
                    <p>Envie sua mensagem que entraremos em contato com você assim que possível.</p>
                </div>
                <form>
                    <input type="text" name="name" id="name" />
                    <input type="text" name="lastName" id="lastName" />
                    <input type="email" name="email" id="email" />
                    <input type="tel" name="phone" id="phone" />
                    <textarea name="message" id="message" cols={30} rows={10}></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </main>
        </>
    )
}