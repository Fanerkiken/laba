import React from 'react'
import styles from './Offers.module.scss'
import img1 from '../assets/img/imgOffersBlueBackground.png'
import imgOffersSecondDish from '../assets/img/imgOffersSecondDish.png'
const Offers = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_title}>
        <div className={styles.container_title_captain}>OFFERS</div>
        <div className={styles.container_title_mainTitle}>Our Offer dishes</div>
        <div className={styles.container_title_description}>Our chefs create melt-in-your-mouth dishes that'll satiate even the fussiest eaters now</div>
        <div className={styles.container_title_description}>the dishes are in offers use it based on hunger.</div>
      </div>
      <div className={styles.container_hotOffers}>
        <div className={styles.container_hotOffers_imgWithDescription}>
          <img src={img1} alt='imgWithBurger' />
        </div>
        <div className={styles.container_hotOffers_imgWithDescription}>
          <img src={imgOffersSecondDish} alt='imgOffersSecondDish' />
        </div>
      </div>
    </div>
  )
}

export default Offers