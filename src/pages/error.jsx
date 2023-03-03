import styles from './Error.module.css'

export const Error = () => {
    return (
    <main>
        <h1 className={styles.title}>404</h1>
        <p className={styles.text}>Oups! La page que vous demandez n'existe pas.</p>
        <p>Retourner sur la page d'accueil</p>
    </main>
    )
}

