import star from '../assets/star.png';
import starGrey from '../assets/starGrey.png';
import styles from './RatingLocation.module.css';

const RatingLocation = ({ score }) => {
   // Tableau représentant les étoiles à itérer
   const ratingTab = [1, 2, 3, 4, 5];
   return (
      <span className={styles.rating}>
         {ratingTab.map((value, index) =>
            value <= score ? (
               <img
                  className={styles.star}
                  src={star}
                  alt="étoile colorée"
                  key={'star' + index}
               />
            ) : (
               <img
                  className={styles.star}
                  src={starGrey}
                  alt="étoile grisée"
                  key={'star' + index}
               />
            )
         )}
      </span>
   );
};

export default RatingLocation;
