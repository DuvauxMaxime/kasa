import Banner from '../components/Banner';
import about from '../assets/about.svg';
import styles from './About.module.css';

const About = () => {
   return (
      <div className={styles.container}>
         <Banner src={about} alt="Torrent au milieu de montagnes" text="" />
      </div>
   );
};

export default About;

export const aProposLoader = () => {
   return {};
};
