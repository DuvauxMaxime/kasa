import moveLeft from '../assets/moveLeft.svg';
import moveRight from '../assets/moveRight.svg';
import { useState } from 'react';
import styles from './Carrousel.module.css';

const Carrousel = ({ src, alt, data }) => {
   const [index, setIndex] = useState(0);
   const tabPictures = data;
   // let viewablePictureIndex = 0;
   let viewablePicture = data[index];
   const numberOfPictures = tabPictures.length;
   const leftMove = (e) => {
      index > 0 && setIndex(index - 1);
   };
   const rightMove = (e) => {
      index < numberOfPictures - 1 && setIndex(index + 1);
   };
   return (
      <div className={styles.container}>
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
         <p className={styles.indicator}>
            {index + 1}/{numberOfPictures}
         </p>
      </div>
   );
};

export default Carrousel;
