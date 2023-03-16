import { useParams } from 'react-router-dom';
import dataLocations from '../data/logements.json';
import Carrousel from '../components/Carrousel';
import TitleLocation from '../components/TitleLocation';
import styles from './Location.module.css';
import LocationLocation from '../components/LocationLocation';
import TagLocation from '../components/TagLocation';
import Person from '../components/Person';
import RateLocation from '../components/RateLocation';
import Collapse from '../components/Collapse';

const Location = () => {
   let { id } = useParams(); //récupère l'id de la location dans l'URL
   // Données locations
   const dataLocation = dataLocations.find((location) => location.id === id); //cherche parmis la DB les datas de l'Id
   //Tags location
   const tags = dataLocation.tags;
   //Liste d'équipements
   const equipmentsList = dataLocation.equipments.map((equipment, index) => (
      <li key={index}>{equipment}</li>
   ));
   // Rating location
   console.log('==========> Location RATING <=========');
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
            <RateLocation rating={dataLocation.rating} />
         </div>
         <div>
            <Collapse
               key="description"
               title="Description"
               content={dataLocation.description}
            />
            <Collapse
               className={styles.equipments}
               key="equipment"
               title="Équipements"
               content={equipmentsList}
            />
         </div>
      </div>
   );
};

export default Location;

export const locationLoader = ({ params }) => {
   // params.id

   return {};
};
