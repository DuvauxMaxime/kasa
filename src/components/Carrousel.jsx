import styles from './Carrousel.module.css';

const Carrousel = ({ src, alt }) => {
   return <img src={src} alt={'appartement' + alt} className={styles.image} />;
};

export default Carrousel;
