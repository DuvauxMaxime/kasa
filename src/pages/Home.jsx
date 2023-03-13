import Banner from '../components/Banner';
import home from '../assets/home.svg';
import styles from './Home.module.css';
import Card from '../components/Card';
import dataLocations from '../data/logements.json';

const Home = () => {
   return (
      <div className={styles.container}>
         <Banner
            src={home}
            alt="Bord de mer par temps de brume"
            text="Chez vous, partout et ailleurs"
         />
         {dataLocations.map((location) => (
            <Card
               key={location.id}
               id={location.id}
               title={location.title}
               cover={location.cover}
            />
         ))}
         ;
      </div>
   );
};

export default Home;

export const locationsLoader = () => {
   return { dataLocations };
};
