import React from 'react'
import styles from './SecondMenu.module.scss'
const SecondMenu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_title}>
        <div className={styles.container_title_captain}>OFFERS</div>
        <div className={styles.container_title_mainTitle}>Popular Dishes</div>
        <div className={styles.container_title_description}>There is a game between the waiters in restaurant to see who serves the food to</div>
        <div className={styles.container_title_description}>each table fastest. That led to attempting the Guinness Record.</div>
      </div>
      <div className={styles.container_img}></div>
      <div className={styles.container_button}></div>
    </div>
  )
}

export default SecondMenu