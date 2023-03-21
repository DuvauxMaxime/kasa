import star from '../assets/star.png';
import starGrey from '../assets/starGrey.png';
import styles from './FeaturesLocation.module.css';

const FeaturesLocation = ({ title, location, owner, picture, tags, score }) => {
   // Tableau représentant les étoiles à itérer
   const ratingTab = [1, 2, 3, 4, 5];
   return (
      <div className={styles.container}>
         <h1 className={styles.title}>{title}</h1>
         <p className={styles.text}>{location}</p>
         <span className={styles.tags}>
            {tags.map((tag, index) => (
               <p className={styles.tag} key={tag + index}>
                  {tag}
               </p>
            ))}
         </span>
         <span className={styles.owner}>{owner}</span>
         <img className={styles.picture} src={picture} alt={owner} />
         <span className={styles.rating}>
            {ratingTab.map((value) =>
               value <= score ? (
                  <img src={star} alt="étoile colorée" />
               ) : (
                  <img src={starGrey} alt="étoile grisée" />
               )
            )}
         </span>
      </div>
   );
};

export default FeaturesLocation;
