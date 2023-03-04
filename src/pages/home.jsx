import { HomePageIllustration } from '../components/HomePageIllustration'
import home from '../assets/home.svg'
import styles from './Home.module.css'

export const Home = () => {
   return (
      <div className={styles.container}>
         <h1>Accueil</h1>
         <HomePageIllustration
            src={home}
            alt="Bord de mer par temps de brume"
         />
      </div>
   )
}
