import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import LogoHeader from './LogoHeader';
import styles from './RootLayout.module.css';

const RootLayout = () => {
   return (
      <>
         <header className={styles.header}>
            <LogoHeader />
            <Navigation />
         </header>
         <main>
            <Outlet />
         </main>
         <Footer />
      </>
   );
};

export default RootLayout;
