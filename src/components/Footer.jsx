import styles from './Footer.module.css'
import logoFooter from '../assets/logoFooter.svg'

export const Footer = () => {
   return (
      <div className={styles.footer}>
         <img src={logoFooter} alt="Kasa" className={styles.kasaLogo} />
         <p className={styles.text}>© 2020 Kasa. All rights reserved</p>
      </div>
   )
}
