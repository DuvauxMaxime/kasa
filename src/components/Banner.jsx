import styles from './Banner.module.css'
import Logo from '../assets/LOGO.svg';

export const Banner = () => {
    console.log(styles)
    return <img src={Logo} alt="Logo Kasa" className={styles.kasaLogo}/>
}
