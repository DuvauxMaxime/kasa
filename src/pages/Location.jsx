import { useParams } from 'react-router-dom';
import dataLocations from '../data/logements.json';
import Carrousel from '../components/Carrousel';
import TitleLocation from '../components/TitleLocation';
import styles from './Location.module.css';
import LocationLocation from '../components/LocationLocation';
import TagLocation from '../components/TagLocation';
import Person from '../components/Person';

const Location = () => {
   let { id } = useParams(); //récupère l'id de la location dans l'URL
   const dataLocation = dataLocations.find((location) => location.id === id); //cherche parmis la DB les datas de l'Id
   const tags = dataLocation.tags;

   return (
      <div className={styles.container}>
         <Carrousel
            src={dataLocation.cover}
            alt={'appartement' + dataLocation.title}
         />
         <div className={styles.identityBlock}>
            <div className={styles.infosLocation}>
               <TitleLocation title={dataLocation.title} />
               <LocationLocation location={dataLocation.location} />
            </div>
            <Person className={styles.infosPerson} />
         </div>
         <span className={styles.tags}>
            {tags.map((tag, index) => (
               <TagLocation key={tag + index} tag={tag} />
            ))}
         </span>
      </div>
   );
};

export default Location;

export const locationLoader = () => {
   return {};
};
