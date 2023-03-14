import styles from './Carrousel.module.css';

const Carrousel = (props) => {
   return (
      <img
         src={props.src}
         alt={'appartement' + props.alt}
         className={styles.image}
      />
   );
};

export default Carrousel;
