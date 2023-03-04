import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'

export const Navigation = () => {
   return (
      <nav className={styles.navBar}>
         <ul>
            <NavLink to="/" className={styles.navLink}>
               <li>Accueil</li>
            </NavLink>
            <NavLink to="/a-propos/" className={styles.navLink}>
               <li>A Propos</li>
            </NavLink>
         </ul>
      </nav>
   )
}
