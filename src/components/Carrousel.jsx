import moveLeft from '../assets/moveLeft.svg';
import moveRight from '../assets/moveRight.svg';
import styles from './Carrousel.module.css';

const Carrousel = ({ src, alt, data }) => {
   const tabPictures = data;
   let defaultIndex = 0;
   let defaultPicture = data[defaultIndex];
   const numberOfPictures = tabPictures.length;
   console.log('------------> Number Pictures <---------------');
   console.log(numberOfPictures);
   console.log('------------> Index <---------------');
   console.log(tabPictures.indexOf(defaultPicture));
   return (
      <div className={styles.container}>
         <img src={defaultPicture} alt="appartement" className={styles.image} />
         <img
            src={moveLeft}
            className={styles.moveLeft}
            alt="flèche directionnelle gauche"
         />
         <img
            src={moveRight}
            className={styles.moveRight}
            alt="flèche directionnelle droite"
         />
      </div>
   );
};

export default Carrousel;
