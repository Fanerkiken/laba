import React from 'react';
import styles from './WhatWeOffer.module.scss'
import {ReactSVG} from "react-svg";
import calendar from "../assets/img/calendar.svg"
import menuList from '../assets/img/menuList.svg'
import deliveryMoto from '../assets/img/deliveryMoto.svg'
const WhatWeOffer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container_information}>
                <div className={styles.container_information_description}>
                    <div className={styles.container_information_description_captain}>WHAT WE OFFER</div>
                    <div className={styles.container_information_description_mainTitle}>Our Great Services</div>
                    <div className={styles.container_information_description_miniDescription}>The atmosphere set the stage. It’s about more than just a dining room away from your home. food takes the spotlight as guests.</div>
                </div>
                <div className={styles.container_information_card}>
                    <ReactSVG src={calendar} />
                    Opened 24/7
                </div>
                <div className={styles.container_information_card}>
                    <ReactSVG src={menuList} />
                    Special Menus
                </div>
                <div className={styles.container_information_card}>
                    <ReactSVG src={deliveryMoto} />
                    Home Delivery
                </div>
            </div>
        </div>
    );
};

export default WhatWeOffer;