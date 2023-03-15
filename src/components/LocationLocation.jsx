import styles from './LocationLocation.module.css';

const LocationLocation = ({ location }) => {
   return <p className={styles.text}>{location}</p>;
};

export default LocationLocation;
