import { useParams } from 'react-router-dom';
import dataLocations from '../data/logements.json';
import Carrousel from '../components/Carrousel';
import TitleLocation from '../components/TitleLocation';
import styles from './Location.module.css';
import LocationLocation from '../components/LocationLocation';
import TagLocation from '../components/TagLocation';
import Person from '../components/Person';
import RateLocation from '../components/RateLocation';

const Location = () => {
   let { id } = useParams(); //récupère l'id de la location dans l'URL
   const dataLocation = dataLocations.find((location) => location.id === id); //cherche parmis la DB les datas de l'Id
   const tags = dataLocation.tags;
   console.log(dataLocation.rating);

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
            <Person
               name={dataLocation.host.name}
               img={dataLocation.host.picture}
            />
         </div>
         <div className={styles.tagRatesBlock}>
            <span className={styles.tags}>
               {tags.map((tag, index) => (
                  <TagLocation key={tag + index} tag={tag} />
               ))}
            </span>
            <RateLocation />
            <RateLocation />
            <RateLocation />
            <RateLocation />
            <RateLocation />
         </div>
      </div>
   );
};

export default Location;

export const locationLoader = () => {
   return {};
};
