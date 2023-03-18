import styles from './Carrousel.module.css';

const Carrousel = ({ src, alt, data }) => {
   const tabPictures = data;
   console.log('------------> Tab Pictures <---------------');
   console.log(tabPictures);
   return (
      <img src={tabPictures[2]} alt="appartement" className={styles.image} />
   );
};

export default Carrousel;
