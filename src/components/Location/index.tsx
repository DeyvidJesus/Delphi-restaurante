import styles from './style.module.scss'

export function Location () {
    return (
        <section id="Location" className={styles.container}>
            <h2>Onde nos encontrar</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23291.87636196043!2d10.752597241347303!3d59.913515632749444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e61f267f039%3A0x7e92605fd3231e9a!2sOslo%2C%20Noruega!5e0!3m2!1spt-BR!2sbr!4v1651963271643!5m2!1spt-BR!2sbr" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
    )
}