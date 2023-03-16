import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
   return (
      <nav className={styles.navBar}>
         <ul>
            <NavLink
               style={({ isActive }) => {
                  return { textDecoration: isActive ? 'underline' : '' };
               }}
               to="/"
               className={styles.navLink}
            >
               <li>Accueil</li>
            </NavLink>
            <NavLink
               style={({ isActive }) => {
                  return { textDecoration: isActive ? 'underline' : '' };
               }}
               to="/a-propos/"
               className={styles.navLink}
            >
               <li>A Propos</li>
            </NavLink>
         </ul>
      </nav>
   );
};

export default Navigation;
