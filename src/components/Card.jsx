import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({ id, cover, title }) => {
   return (
      <Link to={'location/' + id} className={styles.card} key={id}>
         <img className={styles.image} src={cover} alt="" />
         <h2 className={styles.title}>{title}</h2>
      </Link>
   );
};

export default Card;
