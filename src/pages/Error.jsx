import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LogoHeader from '../components/LogoHeader';
import styles from './Error.module.css';

const Error = () => {
   return (
      <>
         <header className={styles.header}>
            <LogoHeader />
            <Navigation />
         </header>
         <main className={styles.container}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.text}>
               Oups! La page que vous demandez n'existe pas.
            </p>
            <a href="/" className={styles.link}>
               Retourner sur la page d'accueil
            </a>
         </main>
         <Footer />
      </>
   );
};

export default Error;
