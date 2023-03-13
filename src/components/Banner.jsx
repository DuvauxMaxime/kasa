import styles from './Banner.module.css';

const Banner = (props) => {
   return (
      <div className={styles.container}>
         <img src={props.src} alt={props.alt} className={styles.image} />
         <h1 className={styles.title}>{props.text}</h1>
      </div>
   );
};

export default Banner;
