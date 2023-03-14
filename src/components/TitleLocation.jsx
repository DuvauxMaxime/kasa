import styles from './TitleLocation.module.css';

const TitleLocation = (props) => {
   return <h1 className={styles.title}>{props.title}</h1>;
};

export default TitleLocation;
