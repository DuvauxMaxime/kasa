import React, { useState } from 'react';
import dropDownClose from '../assets/dropDownClose.svg';
import styles from './Collapse.module.css';

const Collapse = () => {
   const [active, setActive] = useState(false);
   const handleToggle = (e) => {
      console.log(e);
   };
   return (
      <>
         <div className={styles.titleContainer}>
            <h1 className={styles.title}>Spécificités</h1>
            <img src={dropDownClose} onClick={handleToggle} alt="click" />
         </div>
         <p className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eius!
         </p>
      </>
   );
};

export default Collapse;
