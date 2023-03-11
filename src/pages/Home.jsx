import Banner from '../components/Banner';
import home from '../assets/home.svg';
import styles from './Home.module.css';
import Card from '../components/Card';
import dataLocations from '../../data/logements.json';

const Home = () => {
   return (
      <div className={styles.container}>
         <Banner src={home} alt="Bord de mer par temps de brume" />
      </div>
   );
};

export default Home;

export const locationsLoader = () => {
   console.log(dataLocations);
   const location = dataLocations.map((location) => (
      <Card title={location.title} cover={location.cover} />
   ));
   return {};
};
