import styles from './TagLocation.module.css';

const TagLocation = (props) => {
   return <p className={styles.tag}>{props.tag}</p>;
};

export default TagLocation;
