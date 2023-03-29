import styles from './LogoHeader.module.css';
import logoHeader from '../assets/logoHeader.svg';
import { Link } from 'react-router-dom';

const LogoHeader = () => {
   return (
      <Link to="/" className={styles.kasaLogoLink}>
         <img src={logoHeader} alt="Logo Kasa" className={styles.kasaLogo} />
      </Link>
   );
};

export default LogoHeader;
