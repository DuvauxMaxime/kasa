import styles from './TitleLocation.module.css';

const TitleLocation = ({ title }) => {
   return <h1 className={styles.title}>{title}</h1>;
};

export default TitleLocation;
