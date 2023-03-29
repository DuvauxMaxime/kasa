import styles from './Footer.module.css';
import logoFooter from '../assets/logoFooter.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
   return (
      <footer className={styles.footer}>
         <Link to="/" className={styles.kasaLogoLink}>
            <img src={logoFooter} alt="Kasa" className={styles.kasaLogo} />
         </Link>
         <p className={styles.text}>© 2020 Kasa. All rights reserved</p>
      </footer>
   );
};

export default Footer;
