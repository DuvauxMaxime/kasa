import styles from './Person.module.css';

const Person = () => {
   return (
      <div className={styles.container}>
         <p> Lastname et Firstname </p>
         <img
            src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-4.jpg"
            alt="profil du propriétaire du logement"
         />
      </div>
   );
};

export default Person;
