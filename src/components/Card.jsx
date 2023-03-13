import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = (props) => {
   return (
      <Link className={styles.card} key={props.id}>
         <img className={styles.image} src={props.cover} alt="" />
         <h2 className={styles.title}>{props.title}</h2>
      </Link>
   );
};

export default Card;
