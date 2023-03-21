import { useParams } from 'react-router-dom';
import dataLocations from '../data/logements.json';
import Carrousel from '../components/Carrousel';
import styles from './Location.module.css';
import Collapse from '../components/Collapse';
import FeaturesLocation from '../components/FeaturesLocation';

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

   return (
      <div className={styles.container}>
         <Carrousel
            data={dataLocation.pictures}
            src={dataLocation.cover}
            alt={'appartement' + dataLocation.title}
         />
         <FeaturesLocation
            title={dataLocation.title}
            location={dataLocation.location}
            owner={dataLocation.host.name}
            picture={dataLocation.host.picture}
            tags={dataLocation.tags}
            score={dataLocation.rating}
         />
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
