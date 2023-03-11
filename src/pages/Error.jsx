import styles from './Error.module.css';

const Error = () => {
   return (
      <main className={styles.container}>
         <h1 className={styles.title}>404</h1>
         <p className={styles.text}>
            Oups! La page que vous demandez n'existe pas.
         </p>
         <a href="/" className={styles.link}>
            Retourner sur la page d'accueil
         </a>
      </main>
   );
};

export default Error;
