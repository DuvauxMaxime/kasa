import Banner from '../components/Banner';
import home from '../assets/home.svg';
import styles from './Home.module.css';

const Home = () => {
   return (
      <div className={styles.container}>
         <h1>Accueil</h1>
         <Banner src={home} alt="Bord de mer par temps de brume" />
      </div>
   );
};

export default Home;

export const locationsLoader = () => {
   return {};
};
