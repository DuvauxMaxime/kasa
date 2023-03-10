import styles from './HomePageIllustration.module.css'

export const HomePageIllustration = (props) => {
   return (
      <div className={styles.container}>
         <img src={props.src} alt={props.alt} className={styles.image} />
         <h1 className={styles.title}>Chez vous, partout et ailleurs</h1>
      </div>
   )
}
