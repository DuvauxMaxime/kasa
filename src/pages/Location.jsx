import { useParams } from 'react-router-dom';
import dataLocations from '../data/logements.json';
import Carrousel from '../components/Carrousel';
import TitleLocation from '../components/TitleLocation';
import styles from './Location.module.css';
import LocationLocation from '../components/LocationLocation';

const Location = () => {
   let { id } = useParams();
   console.log('==================> id <================');
   console.log(id);
   const dataLocation = dataLocations.find((location) => location.id === id);
   console.log('============> dataLocation <==============');
   console.log(dataLocation);
   return (
      <main className={styles.container}>
         <Carrousel
            src={dataLocation.cover}
            alt={'appartement' + dataLocation.title}
         />
         <TitleLocation title={dataLocation.title} />
         <LocationLocation location={dataLocation.location} />
      </main>
   );
};

export default Location;

export const locationLoader = () => {
   return {};
};
