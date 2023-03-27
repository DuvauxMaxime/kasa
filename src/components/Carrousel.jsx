import preview from '../assets/preview.svg';
import next from '../assets/next.svg';
import bulletPoint from '../assets/bulletPoint.png';
import { useState } from 'react';
import styles from './Carrousel.module.css';

const Carrousel = ({ data }) => {
   const [index, setIndex] = useState(0); // Définit index de la photo à afficher
   const [disableDisplay, setDisableDisplay] = useState(false); // Définit si les éléments de navigation du carrousel sont visibles
   const tabPictures = data; // Tableau des photos
   const displayMoveAndIndicator = () => {
      // Conditions d'affichage des éléments de navigation du carroussel - Hidden si nombre de photos <= 1
      tabPictures.length <= 1 && setDisableDisplay(!disableDisplay);
   };
   let viewablePicture = data[index]; // Photo visible
   // Fonction image précédente
   const handlePrev = () => {
      (index > 0 && setIndex(index - 1)) ||
         (index === 0 && setIndex(tabPictures.length - 1));
   };
   // Fonction image suivante
   const handleNext = () => {
      (index < tabPictures.length - 1 && setIndex(index + 1)) ||
         (index === tabPictures.length - 1 && setIndex(0));
   };
   // Fonction définir une image depuis un bullet point
   const moveBullet = (index) => {
      setIndex(index);
   };
   // Fonction de création des bullets en fonction du nombre de photos dans le carroussel
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
   console.log('================> bullet points <================');
   console.log(bulletPoints);
   console.log('=========> index <=================');
   console.log(index);
   console.log('========> bullet points index <===========');
   console.log(bulletPoints[index]);
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
            {index + 1}/{tabPictures.length}
         </p>
      </div>
   );
};

export default Carrousel;
