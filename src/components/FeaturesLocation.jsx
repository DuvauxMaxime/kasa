import star from '../assets/star.png';
import starGrey from '../assets/starGrey.png';
import styles from './FeaturesLocation.module.css';
import RatingLocation from './RatingLocation';
import Tags from './Tags';

const FeaturesLocation = ({ title, location, owner, picture, tags, score }) => {
   // // Tableau représentant les étoiles à itérer
   // const ratingTab = [1, 2, 3, 4, 5];
   return (
      <div className={styles.container}>
         <div className={styles.leftSide}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.text}>{location}</p>
            <Tags tags={tags} />
            {/* <span className={styles.tags}>
               {tags.map((tag, index) => (
                  <p className={styles.tag} key={tag + index}>
                     {tag}
                  </p>
               ))}
            </span> */}
         </div>
         <div className={styles.rightSide}>
            <div className={styles.ownerPart}>
               <span className={styles.owner}>{owner}</span>
               <img className={styles.picture} src={picture} alt={owner} />
            </div>
            <RatingLocation score={score} />
            {/* <span className={styles.rating}>
               {ratingTab.map((value, index) =>
                  value <= score ? (
                     <img
                        src={star}
                        alt="étoile colorée"
                        key={'star' + index}
                     />
                  ) : (
                     <img
                        src={starGrey}
                        alt="étoile grisée"
                        key={'star' + index}
                     />
                  )
               )}
            </span> */}
         </div>
      </div>
   );
};

export default FeaturesLocation;
