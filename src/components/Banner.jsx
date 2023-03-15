import styles from './Banner.module.css';

const Banner = ({ src, alt, text }) => {
   return (
      <div className={styles.container}>
         <img src={src} alt={alt} className={styles.image} />
         <h1 className={styles.title}>{text}</h1>
      </div>
   );
};

export default Banner;
