import styles from './TagLocation.module.css';

const TagLocation = ({ tag }) => {
   return <p className={styles.tag}>{tag}</p>;
};

export default TagLocation;
