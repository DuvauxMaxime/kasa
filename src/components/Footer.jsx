import styles from './Footer.module.css'
import logoFooter from '../assets/logoFooter.svg'

const Footer = () => {
   return (
      <footer className={styles.footer}>
         <img src={logoFooter} alt="Kasa" className={styles.kasaLogo} />
         <p className={styles.text}>© 2020 Kasa. All rights reserved</p>
      </footer>
   )
}

export default Footer
