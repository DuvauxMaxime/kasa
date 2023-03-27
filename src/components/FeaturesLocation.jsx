import RatingLocation from './RatingLocation';
import Tags from './Tags';
import styles from './FeaturesLocation.module.css';

const FeaturesLocation = ({ title, location, owner, picture, tags, score }) => {
   // // Tableau représentant les étoiles à itérer
   // const ratingTab = [1, 2, 3, 4, 5];
   return (
      <div className={styles.container}>
         <div className={styles.leftSide}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.text}>{location}</p>
            <Tags tags={tags} />
         </div>
         <div className={styles.rightSide}>
            <div className={styles.ownerPart}>
               <span className={styles.owner}>{owner}</span>
               <img className={styles.picture} src={picture} alt={owner} />
            </div>
            <RatingLocation score={score} />
         </div>
      </div>
   );
};

export default FeaturesLocation;
