import moveLeft from '../assets/moveLeft.svg';
import moveRight from '../assets/moveRight.svg';
import bulletPoint from '../assets/bulletPoint.png';
import { useState } from 'react';
import styles from './Carrousel.module.css';

const Carrousel = ({ data }) => {
   const [index, setIndex] = useState(0); // Définit index de la photo à afficher
   const [disableDisplay, setDisableDisplay] = useState(false); // Définit si les éléments de navigation du carrousel sont visibles
   const displayMoveAndIndicator = (e) => {
      numberOfPictures <= 1 && setDisableDisplay(!disableDisplay);
   };
   const tabPictures = data; // Tab des photos
   let viewablePicture = data[index]; // Photo visible
   const numberOfPictures = tabPictures.length; // Nombre de photos pour la location
   // Fonction changer image à gauche
   const leftMove = (e) => {
      (index > 0 && setIndex(index - 1)) ||
         (index === 0 && setIndex(numberOfPictures - 1));
   };
   // Fonction changer image à droite
   const rightMove = (e) => {
      (index < numberOfPictures - 1 && setIndex(index + 1)) ||
         (index === numberOfPictures - 1 && setIndex(0));
   };
   // Fonction bullet point
   const moveBullet = (e) => {
      index !== e.target.__reactFiber$88gm81x2zqe.index &&
         setIndex(e.target.__reactFiber$88gm81x2zqe.index);
   };
   // const displayBullet = (e) => {
   //    console.log('======================> BULLET POINT INDEX VIEWABLE');
   //    console.log(
   //       (bulletPointIndexViewable.props.className += `${styles.displayBullet}`)
   //    );
   // };
   const bulletPoints = tabPictures.map((index) => (
      <img
         key={index}
         src={bulletPoint}
         className={styles.bulletPoint}
         alt="bullet point"
         onClick={moveBullet}
      />
   ));
   const bulletPointIndexViewable = bulletPoints.find(
      (bulletPoint) => bulletPoint.key === bulletPoints[index].key
   );
   console.log(bulletPointIndexViewable);
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
            src={moveLeft}
            className={styles.moveLeft}
            alt="flèche directionnelle gauche"
            onClick={leftMove}
         />
         <img
            src={moveRight}
            className={styles.moveRight}
            alt="flèche directionnelle droite"
            onClick={rightMove}
         />
         <div className={styles.bulletPart}>{bulletPoints}</div>

         <p className={styles.indicator}>
            {index + 1}/{numberOfPictures}
         </p>
      </div>
   );
};

export default Carrousel;
