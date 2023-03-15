import styles from './Person.module.css';

const Person = ({ name, img }) => {
   return (
      <div className={styles.container}>
         <p>{name}</p>
         <img className={styles.image} src={img} alt={name} />
      </div>
   );
};

export default Person;
