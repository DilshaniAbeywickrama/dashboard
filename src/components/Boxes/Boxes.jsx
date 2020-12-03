import React from 'react';
import styles from './Boxes.module.css';
import logo from '../../images/image.png';

const Boxes =(props) => {
    console.log(props);
    return (
        <div xs={12} md={3} className={styles.topic}>

            <img className={styles.logo } src={logo} width="3%" alt="logo" />
            <h1>COVID-19: Live Situational Analysis Dashboard</h1>
        </div>
    );
}
export default Boxes;