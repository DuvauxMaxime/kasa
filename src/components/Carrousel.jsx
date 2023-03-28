import preview from '../assets/preview.svg';
import next from '../assets/next.svg';
import bulletPoint from '../assets/bulletPoint.png';
import { useState } from 'react';
import styles from './Carrousel.module.css';

const Carrousel = ({ data }) => {
   const [index, setIndex] = useState(0); // Définit index de la photo à afficher
   const [display, setDisplay] = useState(false); // Définit l'affichage des éléments (navigation et bulletpoints)
   const tabPictures = data; // Tableau des photos
   const displayMoveAndIndicator = () => {
      // Conditions d'affichage des éléments de navigation du carroussel - Hidden si nombre de photos <= 1
      tabPictures.length <= 1 && setDisplay(!display);
   };
   let viewablePicture = data[index]; // Photo visible
   // Fonction image précédente
   const handlePrev = () => {
      index === 0 ? setIndex(tabPictures.length - 1) : setIndex(index - 1);
   };
   // Fonction image suivante
   const handleNext = () => {
      index === tabPictures.length - 1 ? setIndex(0) : setIndex(index + 1);
   };
   // Fonction définir une image depuis un bullet point
   const moveBullet = (index) => {
      setIndex(index);
   };
   // Fonction de création des bullets en fonction du nombre de photos dans le carroussel
   const bulletPoints = tabPictures.map((picture, indexPicture) => (
      <li
         key={picture}
         src={bulletPoint}
         className={
            index === indexPicture
               ? styles.bulletPointActive
               : styles.bulletPoint
         }
         alt="bullet point"
         onClick={() => {
            moveBullet(indexPicture);
         }}
      />
   ));

   return (
      <div
         className={`${styles.container} ${
            // Injecte le style qui masque les éléments de navigation (si nombre de pictures <= 1)
            display ? styles.disableDisplay : null
         }`}
      >
         <img
            src={viewablePicture}
            alt="appartement"
            className={styles.image}
            onLoad={displayMoveAndIndicator} // Déclenche la fonction display des éléments de navigation du carroussel
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
         <ul className={styles.bulletPart}>{bulletPoints}</ul>
         <p className={styles.indicator}>
            {/* Correction de l'index de la photo (+1) */}
            {index + 1}/{tabPictures.length}
         </p>
      </div>
   );
};

export default Carrousel;
