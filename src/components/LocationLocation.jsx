import styles from './LocationLocation.module.css';

const LocationLocation = (props) => {
   return <p className={styles.text}>{props.location}</p>;
};

export default LocationLocation;
