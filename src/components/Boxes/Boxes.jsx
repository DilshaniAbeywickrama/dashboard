import React from 'react';
import styles from './Boxes.module.css';

const Boxes =(props) => {
    console.log(props);
    return (
        <div xs={12} md={3} className={styles.topic}>

            <img className={styles.logo } src="/images/image.png" width="3%" alt="logo" />
            <h1>COVID-19: Live Situational Analysis Dashboard</h1>
        </div>
    );
}
export default Boxes;