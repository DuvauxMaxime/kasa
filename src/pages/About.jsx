import Banner from '../components/Banner';
import about from '../assets/about.svg';
import styles from './About.module.css';
import Collapse from '../components/Collapse';
import dataAbout from '../data/about.json';
import { useLoaderData } from 'react-router';

const About = () => {
   const aboutData = useLoaderData();
   return (
      <div className={styles.container}>
         <Banner src={about} alt="Torrent au milieu de montagnes" text="" />
         {aboutData.map((about, index) => (
            <Collapse key={index} title={about.title} content={about.contain} />
         ))}
      </div>
   );
};

export default About;

export const aProposLoader = () => {
   return dataAbout;
};
