import React from 'react'
import styles from './SecondMenu.module.scss'
import imgToSecondMenu1Dish from '../assets/img/imgToSecondMenu1Dish.png'
import imgToSecondMenu2Dish from '../assets/img/imgToSecondMenu2Dish.png'
import imgToSecondMenu3Dish from '../assets/img/imgToSecondMenu3Dish.png'
import imgToSecondMenu4Dish from '../assets/img/imgToSecondMenu4Dish.png'
import Buttons from "./firstPage/buttons/Buttons";

const SecondMenu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_title}>
        <div className={styles.container_title_captain}>MENU</div>
        <div className={styles.container_title_mainTitle}>Popular Dishes</div>
        <div className={styles.container_title_description}>There is a game between the waiters in restaurant to see who serves the food to</div>
        <div className={styles.container_title_description}>each table fastest. That led to attempting the Guinness Record.</div>
      </div>
      <div className={styles.container_img}>
          <div className={styles.container_img_cart}>
              <img src={imgToSecondMenu1Dish} alt="imgToSecondMenu1Dish"/>
              <div className={styles.container_img_cart_information}>
                  <div className={styles.container_img_cart_information_titlePrice}>
                      <div className={styles.container_img_cart_information_titlePrice_title}>Chicken Manjoori</div>
                      <div className={styles.container_img_cart_information_titlePrice_price}>$15</div>
                  </div>
                  <div className={styles.rectangle}></div>
                  <div className={styles.container_img_cart_information_description}>Dish relished by all age groups as a starter dish at parties.</div>
              </div>
          </div>
          <div className={styles.container_img_cart}>
              <img src={imgToSecondMenu2Dish} alt="imgToSecondMenu2Dish"/>
              <div className={styles.container_img_cart_information}>
                  <div className={styles.container_img_cart_information_titlePrice}>
                      <div className={styles.container_img_cart_information_titlePrice_title}>Hotdog</div>
                      <div className={styles.container_img_cart_information_titlePrice_price}>$10</div>
                  </div>
                  <div className={styles.rectangle}></div>
                  <div className={styles.container_img_cart_information_description}>Grilled sausage served in the slit of a partially sliced bun.</div>
              </div>
          </div>
          <div className={styles.container_img_cart}>
              <img src={imgToSecondMenu3Dish} alt="imgToSecondMenu2Dish"/>
              <div className={styles.container_img_cart_information}>
                  <div className={styles.container_img_cart_information_titlePrice}>
                      <div className={styles.container_img_cart_information_titlePrice_title}>Fresh Salmon</div>
                      <div className={styles.container_img_cart_information_titlePrice_price}>$5</div>
                  </div>
                  <div className={styles.rectangle}></div>
                  <div className={styles.container_img_cart_information_description}>Beat the health blues with our Super Immune Blue Juice Recipe.</div>
              </div>
          </div>
          <div className={styles.container_img_cart}>
              <img src={imgToSecondMenu4Dish} alt="imgToSecondMenu2Dish"/>
              <div className={styles.container_img_cart_information}>
                  <div className={styles.container_img_cart_information_titlePrice}>
                      <div className={styles.container_img_cart_information_titlePrice_title}>Veg Burger</div>
                      <div className={styles.container_img_cart_information_titlePrice_price}>$10</div>
                  </div>
                  <div className={styles.rectangle}></div>
                  <div className={styles.container_img_cart_information_description}>Burgers may be made from ingredients like beans.</div>
              </div>
          </div>
      </div>
      <div className={styles.container_button}>
          <Buttons ghost className={styles.seeAllDishesButton}>See all dishes</Buttons>
      </div>
    </div>
  )
}

export default SecondMenu