import styles from './Card.module.css';

const Card = (props) => {
   return (
      <li className={styles.card}>
         <img src={props.cover} alt="" />
         <h2>{props.title}</h2>
      </li>
   );
};

export default Card;
