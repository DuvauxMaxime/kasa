import styles from './RateLocation.module.css';
import star from '../assets/star.png';
import starGrey from '../assets/starGrey.png';

const RateLocation = ({ rating }) => {
   // Tableau représentant les étoiles à itérer
   const ratingTab = [1, 2, 3, 4, 5];
   return (
      <span className={styles.rating}>
         {ratingTab.map((value) =>
            value <= rating ? (
               <img src={star} alt="étoile colorée" />
            ) : (
               <img src={starGrey} alt="étoile grisée" />
            )
         )}
      </span>
   );
};

export default RateLocation;
