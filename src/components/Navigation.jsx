import { NavLink } from 'react-router-dom'

export const Navigation = () => {
    return (
            <nav>
                <NavLink to='/'>Accueil</NavLink>
                <NavLink to='/a-propos/'>A propos</NavLink>
            </nav>
    )
}
