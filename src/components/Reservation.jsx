import React from 'react'
import imgReservationPageBG from '../assets/img/imgReservationPageBG.png'
import styles from './Reservation.module.scss'
import Buttons from './firstPage/buttons/Buttons'
const Reservation = () => {
  return (
    <div className={styles.container}>
      <img src={imgReservationPageBG} alt='imgReservationPageBG' />
      <div className={styles.container_infoContainer}>
        <div className={styles.container_infoContainer_title}>
          <div className={styles.container_infoContainer_title_captain}>RESERVATION</div>
          <div className={styles.container_infoContainer_title_mainTitle}>Book Your Table</div>
        </div>
        <div className={styles.container_infoContainer_inputsAndButton}>
          <div className={styles.container_infoContainer_inputsAndButton_nameAndEmail}>
            <div className={styles.inputsBook}>
              <div className={styles.inputsBook_name}>
                <div className={styles.inputsBook_name_description}>Name</div>
              </div>
              <div className={styles.inputsBook_email}>
                <div className={styles.inputsBook_email_description}>Email</div>
              </div>
            </div>
          </div>
          <div className={styles.container_infoContainer_inputsAndButton_personsTimingDate}>
            <div className={styles.inputsBook}>
              <div className={styles.inputsBook_person}>
                <div className={styles.inputsBook_person_description}>Person</div>
              </div>
              <div className={styles.inputsBook_timing}>
                <div className={styles.inputsBook_timing_description}>Timing</div>
              </div>
              <div className={styles.inputsBook_date}>
                <div className={styles.inputsBook_date_description}>Date</div>
              </div>
            </div>
          </div>
          <div className={styles.toButton}>
            <Buttons className={styles.BookATableButton}>Book A Table</Buttons>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reservation