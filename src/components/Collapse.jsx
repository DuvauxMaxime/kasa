import React, { useState } from 'react';
import dropDownClose from '../assets/dropDownClose.svg';
import styles from './Collapse.module.css';

const Collapse = (props) => {
   const [active, setActive] = useState(false);
   const handleToggle = (e) => {
      setActive(!active);
   };
   return (
      <div className={`${styles.container} ${active ? styles.active : null}`}>
         <div className={styles.titleContainer}>
            <h1 className={styles.title}>{props.title}</h1>
            <img
               src={dropDownClose}
               className={styles.icon}
               onClick={handleToggle}
               alt="click"
            />
         </div>
         <p className={styles.content}>{props.content}</p>
      </div>
   );
};

export default Collapse;
