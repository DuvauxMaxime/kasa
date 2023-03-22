import styles from './Tags.module.css';

const Tags = ({ tags }) => {
   return (
      <span className={styles.tags}>
         {tags.map((tag, index) => (
            <p className={styles.tag} key={tag + index}>
               {tag}
            </p>
         ))}
      </span>
   );
};

export default Tags;
