import React, { useState } from 'react';
import dropDownClose from '../assets/dropDownClose.svg';
import styles from './Collapse.module.css';

const Collapse = () => {
   const [active, setActive] = useState(false);
   const handleToggle = (e) => {
      setActive(!active);
   };
   return (
      <div className={`${active && styles.active}`}>
         <div className={styles.titleContainer}>
            <h1 className={styles.title}>Spécificités</h1>
            <img
               src={dropDownClose}
               className={styles.icon}
               onClick={handleToggle}
               alt="click"
            />
         </div>
         <p className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eius!
         </p>
      </div>
   );
};

export default Collapse;
