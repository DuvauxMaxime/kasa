import styles from './Person.module.css';

const Person = (props) => {
   return (
      <div className={styles.container}>
         <p>{props.name}</p>
         <img className={styles.image} src={props.img} alt={props.name} />
      </div>
   );
};

export default Person;
