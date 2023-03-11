import styles from './LogoHeader.module.css';
import logoHeader from '../assets/logoHeader.svg';

const LogoHeader = () => {
   return <img src={logoHeader} alt="Logo Kasa" className={styles.kasaLogo} />;
};

export default LogoHeader;
