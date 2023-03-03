import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'

export const Navigation = () => {
    return (
            <nav className={styles.navBar}>
                <NavLink to='/' >Accueil</NavLink>
                <NavLink to='/a-propos/'>A propos</NavLink>
            </nav>
    )
}
