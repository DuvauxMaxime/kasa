import preview from '../assets/preview.svg';
import next from '../assets/next.svg';
import bulletPoint from '../assets/bulletPoint.png';
import { useState } from 'react';
import styles from './Carrousel.module.css';

const Carrousel = ({ data }) => {
   const [index, setIndex] = useState(0); // Définit index de la photo à afficher
   const [disableDisplay, setDisableDisplay] = useState(false); // Définit si les éléments de navigation du carrousel sont visibles
   const displayMoveAndIndicator = () => {
      numberOfPictures <= 1 && setDisableDisplay(!disableDisplay);
   };
   const tabPictures = data; // Tab des photos
   let viewablePicture = data[index]; // Photo visible
   const numberOfPictures = tabPictures.length; // Nombre de photos pour la location
   // Fonction changer image à gauche
   const handlePrev = () => {
      (index > 0 && setIndex(index - 1)) ||
         (index === 0 && setIndex(numberOfPictures - 1));
   };
   // Fonction changer image à droite
   const handleNext = () => {
      (index < numberOfPictures - 1 && setIndex(index + 1)) ||
         (index === numberOfPictures - 1 && setIndex(0));
   };
   // Fonction bullet point
   const moveBullet = (index) => {
      setIndex(index);
   };

   const bulletPoints = tabPictures.map((picture, index) => (
      <img
         key={picture}
         src={bulletPoint}
         className={styles.bulletPoint}
         alt="bullet point"
         onClick={() => {
            moveBullet(index);
         }}
      />
   ));
   return (
      <div
         className={`${styles.container} ${
            disableDisplay ? styles.disableDisplay : null
         }`}
         onLoad={displayMoveAndIndicator}
      >
         <img
            src={viewablePicture}
            alt="appartement"
            className={styles.image}
         />
         <img
            src={preview}
            className={styles.preview}
            alt="flèche directionnelle gauche"
            onClick={handlePrev}
         />
         <img
            src={next}
            className={styles.next}
            alt="flèche directionnelle droite"
            onClick={handleNext}
         />
         <div className={styles.bulletPart}>{bulletPoints}</div>

         <p className={styles.indicator}>
            {index + 1}/{numberOfPictures}
         </p>
      </div>
   );
};

export default Carrousel;
