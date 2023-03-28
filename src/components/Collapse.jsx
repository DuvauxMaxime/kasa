import React, { useState } from 'react';
import dropDownClose from '../assets/dropDownClose.svg';
import styles from './Collapse.module.css';

const Collapse = ({ title, content }) => {
   const [active, setActive] = useState(false);
   const handleToggle = () => {
      setActive(!active);
   };
   return (
      <div className={`${active ? styles.active : null}`}>
         <div className={styles.titleContainer}>
            <h1 className={styles.title}>{title}</h1>
            <img
               src={dropDownClose}
               className={styles.icon}
               onClick={handleToggle}
               alt="click"
            />
         </div>
         <p className={styles.content}>{content}</p>
      </div>
   );
};

export default Collapse;
