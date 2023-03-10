import styles from './HomePageIllustration.module.css'

export const HomePageIllustration = (props) => {
   return <img src={props.src} alt={props.alt} className={styles.image} />
}
