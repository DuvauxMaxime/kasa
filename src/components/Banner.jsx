import styles from './Banner.module.css'
import logoBanner from '../assets/logoBanner.svg';

export const Banner = () => {
    console.log(styles)
    return <img src={logoBanner} alt="Logo Kasa" className={styles.kasaLogo}/>
}
