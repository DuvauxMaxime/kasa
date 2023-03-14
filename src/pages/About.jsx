import Banner from '../components/Banner';
import about from '../assets/about.svg';
import styles from './About.module.css';
import Collapse from '../components/Collapse';

const About = () => {
   return (
      <div className={styles.container}>
         <Banner src={about} alt="Torrent au milieu de montagnes" text="" />

         <Collapse title="Titre 2" content="Contenu 2" />
         <Collapse title="Titre 1" content="Contenu 1" />
         <Collapse title="Titre 3" content="Contenu 3" />
      </div>
   );
};

export default About;

export const aProposLoader = () => {
   return {};
};
