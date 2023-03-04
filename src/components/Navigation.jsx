import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'

export const Navigation = () => {
   return (
      <nav className={styles.navBar}>
         <NavLink to="/" className={styles.navLink}>
            Accueil
         </NavLink>
         <NavLink to="/a-propos/" className={styles.navLink}>
            A Propos
         </NavLink>
      </nav>
   )
}
