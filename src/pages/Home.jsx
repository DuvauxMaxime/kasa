import Banner from '../components/Banner';
import home from '../assets/home.svg';
import styles from './Home.module.css';
import Card from '../components/Card';
import dataLocations from '../data/logements.json';
import { useEffect } from 'react';

const Home = () => {
   return (
      <div className={styles.container}>
         <Banner src={home} alt="Bord de mer par temps de brume" />
      </div>
   );
};

export default Home;

export const locationsLoader = () => {
   console.log('===========> DATALOCATIONS <===============');
   console.log(dataLocations);
   const locations = dataLocations.map((location) => (
      <Card
         key={location.id}
         id={location.id}
         title={location.title}
         cover={location.cover}
      />
   ));
   console.log('===========> LOCATION <===============');
   console.log(locations);
   return { locations };
};
