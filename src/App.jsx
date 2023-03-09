import styles from './App.module.scss';
import { ReactSVG } from "react-svg";
import logo from '../src/assets/img/mainLogo.svg'
import instagramLogo from './assets/img/instagramLogo.svg'
import facebookLogo from './assets/img/facebookLogo.svg'
import twitterLogo from './assets/img/twitterLogo.svg'
import pinterestLogo from './assets/img/pinterestLogo.svg'
import pechatkaLogo from './assets/img/pechatka.svg'
import locationLogoPage2 from './assets/img/locationLogoPage2.svg'
import openHourLogo from './assets/img/openHoursLogo.svg'
import reservationLogo from './assets/img/reservationLogo.svg'
import signedLogo from './assets/img/sindedLogoSvg.svg'
import imgDeliciousStory from './assets/img/imgForDStory.png'
import imgArka from './assets/img/img.png'
import imgSpecialDish from './assets/img/imgSpecialDishes.png'
import imgRawScallopsFromErquy from './assets/img/imgRawScallopsfromErquy.png'
import imgSpringRoll from './assets/img/imgSpringRoll.png'
import imgFrSoup from './assets/img/imgFrSoup.png'
import imgTomatoBruschetta from './assets/img/imgTomatoBruschetta.png'
import imgGrilledSwithDS from './assets/img/imgGrilledSwithDS.png'
import imgRoastBeefWithVegetable from './assets/img/imgRoastBeefWithVegetable.png'
import imgMarrekeshVegetetationCurruy from './assets/img/imgMarrekeshVegetetationCurruy.png'
import imgSpicyVeganPotatoCurry from './assets/img/imgSpicyVeganPotatoCurry.png'
import imgApplePieWCream from './assets/img/imgApplePieWCream.png'
import imgLemonMeringuePie from './assets/img/imgLemonMeringuePie.png'
import Buttons from "./components/firstPage/buttons/Buttons";
import AllLinksFromFirstPage from "./components/firstPage/AllLinksFromFirstPage";
import PageWithSlider from './components/PageWithSlider'
import OnlyImage from './components/OnlyImage'
import Offers from './components/Offers'
import SecondMenu from './components/SecondMenu'
import WhatWeOffer from "./components/WhatWeOffer";
import Blog from "./components/Blog";
import Reservation from './components/Reservation'
import Footer from './components/Footer'

function App() {
  return (
      <>
          <div className={styles.header}>
              <div className={styles.header_main}>
                  <Buttons href='tel:+375445405363' ghost>Call - 123 456 789</Buttons>
                  <ReactSVG src={logo} />
                  <Buttons>Reservation</Buttons>
              </div>

              <div className={styles.header_navigation}>
                  <div className={styles.header_navigation_links}>
                      <AllLinksFromFirstPage />

                  </div>
                  <div className={styles.header_navigation_icons}>
                      <ReactSVG src={instagramLogo} />
                      <ReactSVG src={facebookLogo} />
                      <ReactSVG src={twitterLogo} />
                      <ReactSVG src={pinterestLogo} />
                  </div>
              </div>
              <div className={styles.page2}>
                  <div className={styles.page2_informationAndImg}>
                      <div className={styles.page2_informationAndImg_information}>
                          <div className={styles.page2_informationAndImg_information_welcome}>Welcome to</div>
                          <div className={styles.page2_informationAndImg_information_restaurant}>Restaurant</div>
                          <div className={styles.page2_informationAndImg_information_peopleAndFood}>
                              The people, food and the prime locations make the perfect place good friends & family to come together and have great time.
                          </div>
                          <Buttons ghost className={styles.viewMenuButton}>View Menu</Buttons>
                      </div>
                      <div className={styles.page2_informationAndImg_rectangleH}></div>
                      <div className={styles.page2_informationAndImg_imgBox}>
                          <div className={styles.page2_informationAndImg_imgBox_img}>
                              <img src={imgArka} alt="imgARKA"/>
                              <ReactSVG src={pechatkaLogo} className={styles.page2_informationAndImg_imgBox_img_pechatka}/>
                          </div>

                      </div>
                      <div className={styles.page2_informationAndImg_rectangleHRigth}></div>
                  </div>

              </div>
            <div className={styles.footerPage2}>
                <div className={styles.footerPage2_information}>
                    <div className={styles.footerPage2_information_imgAndInfo}>
                        <div className={styles.footerPage2_information_imgAndInfo_svg}>
                            <ReactSVG src={locationLogoPage2} />
                        </div>
                        <div className={styles.footerPage2_information_imgAndInfo_contactInfo}>
                            <div className={styles.footerPage2_information_imgAndInfo_contactInfo_title}>Locate Us</div>
                            <div className={styles.footerPage2_information_imgAndInfo_contactInfo_description}>Riverside 25, San Diego, California</div>
                        </div>
                    </div>
                    <div className={styles.footerPage2_information_imgAndInfo}>
                        <div className={styles.footerPage2_information_imgAndInfo_svg}>
                            <ReactSVG src={openHourLogo} />
                        </div>
                        <div className={styles.footerPage2_information_imgAndInfo_contactInfo}>
                            <div className={styles.footerPage2_information_imgAndInfo_contactInfo_title}>Open Hours</div>
                            <div className={styles.footerPage2_information_imgAndInfo_contactInfo_description}>Mon To Fri 9:00 AM - 9:00 PM</div>
                        </div>
                    </div>
                    <div className={styles.footerPage2_information_imgAndInfo}>
                        <div className={styles.footerPage2_information_imgAndInfo_svg}>
                            <ReactSVG src={reservationLogo} />
                        </div>
                        <div className={styles.footerPage2_information_imgAndInfo_contactInfo}>
                            <div className={styles.footerPage2_information_imgAndInfo_contactInfo_title}>Reservation</div>
                            <div className={styles.footerPage2_information_imgAndInfo_contactInfo_description}>restaurantate@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
              <div className={styles.theDeliciousStory}>
                    <div className={styles.theDeliciousStory_container}>
                        <div className={styles.theDeliciousStory_container_img}>
                            <img src={imgDeliciousStory} alt="imgForDStory"/>
                        </div>
                        <div className={styles.theDeliciousStory_container_story}>
                            <div className={styles.theDeliciousStory_container_story_title}>The Delicious Story</div>
                            <div className={styles.theDeliciousStory_container_story_description}>The people, food and the prime locations make the perfect place for the friends & family to come together and have great time.</div>
                            <div className={styles.theDeliciousStory_container_story_openClose}>
                                <div className={styles.theDeliciousStory_container_story_openClose_start}>
                                    <div className={styles.theDeliciousStory_container_story_openClose_start_year}>2018</div>
                                    <div className={styles.theDeliciousStory_container_story_openClose_start_description}>Plan for this restaurant to deliver healthy food.</div>
                                </div>
                                <div className={styles.theDeliciousStory_container_story_openClose_close}>
                                    <div className={styles.theDeliciousStory_container_story_openClose_close_year}>2022</div>
                                    <div className={styles.theDeliciousStory_container_story_openClose_close_description}>Happily in the fourth year by fulfill the motto.</div>
                                </div>
                            </div>
                            <div className={styles.theDeliciousStory_container_story_signed}>
                                <div className={styles.theDeliciousStory_container_story_signed_title}>JOSEFINE</div>
                                <div className={styles.theDeliciousStory_container_story_signed_signedSvg}>
                                    <ReactSVG src={signedLogo} />
                                </div>
                            </div>
                        </div>
                    </div>
              </div>
              <div className={styles.menu}>
                  <div className={styles.menu_specialDishes}>
                      <div className={styles.menu_specialDishes_information}>
                          {/*<div className={styles.menu_specialDishes_information_borderOutCaption}></div>*/}
                          <div className={styles.menu_specialDishes_information_caption}>MENU</div>
                          {/*<div className={styles.menu_specialDishes_information_borderOutCaption}></div>*/}
                          <div className={styles.menu_specialDishes_information_title}>Try Our Special dishes</div>
                          <div className={styles.menu_specialDishes_information_description}>Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area.</div>
                      </div>
                      <div className={styles.menu_specialDishes_img}>
                          <img src={imgSpecialDish} alt='SpecialDishes' />
                      </div>
                      <div className={styles.menu_specialDishes_button}>
                          <Buttons ghost className={styles.seeAllDishesButton}>See all dishes</Buttons>
                      </div>
                  </div>
                  <div className={styles.menu_typeOfFood}>
                      <div className={styles.menu_typeOfFood_starters}>
                          <div className={styles.menu_typeOfFood_title}>Starters</div>
                          <div className={styles.menu_typeOfFood_dishWithDescription}>
                              <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription}>
                                  <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_img}>
                                      <img src={imgRawScallopsFromErquy} alt='imgRawScallopsFromErquy' />
                                  </div>
                                  <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_titleDescription}>
                                      <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_titleDescription_title}>Raw Scallops from Erquy</div>
                                      <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_titleDescription_description}>Shuck the scallop to that used for oysters</div>
                                  </div>
                              </div>
                              <div className={styles.menu_typeOfFood_dishWithDescription_divForBorder}></div>
                              <div className={styles.menu_typeOfFood_dishWithDescription_price}>$40</div>
                          </div>
                          <div className={styles.menu_typeOfFood_dishWithDescription}>
                              <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription}>
                                  <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_img}>
                                      <img src={imgSpringRoll} alt='imgSpringRoll' />
                                  </div>
                                  <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_titleDescription}>
                                      <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_titleDescription_title}>Spring Roll</div>
                                      <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_titleDescription_description}>Add oil to a hot pan spring onion whites</div>
                                  </div>
                              </div>
                              <div className={styles.menu_typeOfFood_dishWithDescription_divForBorder}></div>
                              <div className={styles.menu_typeOfFood_dishWithDescription_price}>$20</div>
                          </div>
                          <div className={styles.menu_typeOfFood_dishWithDescription}>
                              <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription}>
                                  <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_img}>
                                      <img src={imgFrSoup} alt='imgFrSoup' />
                                  </div>
                                  <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_titleDescription}>
                                      <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_titleDescription_title}>French Onion Soup</div>
                                      <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_titleDescription_description}>Wheat flour, apple cider vinegar, bread</div>
                                  </div>
                              </div>
                              <div className={styles.menu_typeOfFood_dishWithDescription_divForBorder}></div>
                              <div className={styles.menu_typeOfFood_dishWithDescription_price}>$25</div>
                          </div>
                          <div className={styles.menu_typeOfFood_dishWithDescription}>
                              <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription}>
                                  <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_img}>
                                      <img src={imgTomatoBruschetta} alt='imgTomatoBruschetta' />
                                  </div>
                                  <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_titleDescription}>
                                      <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_titleDescription_title}>French Onion Soup</div>
                                      <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_titleDescription_description}>Wheat flour, apple cider vinegar, bread</div>
                                  </div>
                              </div>
                              <div className={styles.menu_typeOfFood_dishWithDescription_divForBorder}></div>
                              <div className={styles.menu_typeOfFood_dishWithDescription_price}>$30</div>
                          </div>
                      </div>
                      <div className={styles.menu_typeOfFood_mainDish}>
                          <div className={styles.menu_typeOfFood_title}>Main Dish</div>
                          <div className={styles.menu_typeOfFood_dishWithDescription}>
                              <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription}>
                                  <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_img}>
                                      <img src={imgGrilledSwithDS} alt='imgGrilledSwithDS' />
                                  </div>
                                  <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_titleDescription}>
                                      <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_titleDescription_title}>Grilled Salmon with Dill Sauce</div>
                                      <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_titleDescription_description}>Brown sugar, salmon fillet, Dijon mustard</div>
                                  </div>
                              </div>
                              <div className={styles.menu_typeOfFood_dishWithDescription_divForBorder}></div>
                              <div className={styles.menu_typeOfFood_dishWithDescription_price}>$40</div>
                          </div>
                          <div className={styles.menu_typeOfFood_dishWithDescription}>
                              <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription}>
                                  <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_img}>
                                      <img src={imgRoastBeefWithVegetable} alt='imgRoastBeefWithVegetable' />
                                  </div>
                                  <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_titleDescription}>
                                      <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_titleDescription_title}>Roast Beef with Vegetable</div>
                                      <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_titleDescription_description}>Green beans, rib eye, olive oil, beef</div>
                                  </div>
                              </div>
                              <div className={styles.menu_typeOfFood_dishWithDescription_divForBorder}></div>
                              <div className={styles.menu_typeOfFood_dishWithDescription_price}>$20</div>
                          </div>
                          <div className={styles.menu_typeOfFood_dishWithDescription}>
                              <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription}>
                                  <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_img}>
                                      <img src={imgMarrekeshVegetetationCurruy} alt='imgMarrekeshVegetetationCurruy' />
                                  </div>
                                  <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_titleDescription}>
                                      <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_titleDescription_title}>Marrkesh Vegetetarian Curruy</div>
                                      <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_titleDescription_description}>Sweet potato, eggplant, garbanzo bean</div>
                                  </div>
                              </div>
                              <div className={styles.menu_typeOfFood_dishWithDescription_divForBorder}></div>
                              <div className={styles.menu_typeOfFood_dishWithDescription_price}>$25</div>
                          </div>
                          <div className={styles.menu_typeOfFood_dishWithDescription}>
                              <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription}>
                                  <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_img}>
                                      <img src={imgSpicyVeganPotatoCurry} alt='imgSpicyVeganPotatoCurry' />
                                  </div>
                                  <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_titleDescription}>
                                      <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_titleDescription_title}>Spicy Vegan Potato Curry</div>
                                      <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_titleDescription_description}>Coconut milk, beans, potatoes, curry powder</div>
                                  </div>
                              </div>
                              <div className={styles.menu_typeOfFood_dishWithDescription_divForBorder}></div>
                              <div className={styles.menu_typeOfFood_dishWithDescription_price}>$35</div>
                          </div>
                      </div>
                      <div className={styles.menu_typeOfFood_dessert}>
                          <div className={styles.menu_typeOfFood_title}>Dessert</div>
                          <div className={styles.menu_typeOfFood_dishWithDescription}>
                              <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription}>
                                  <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_img}>
                                      <img src={imgApplePieWCream} alt='imgApplePieWCream' />
                                  </div>
                                  <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_titleDescription}>
                                      <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_titleDescription_title}>Apple Pie with Cream</div>
                                      <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_titleDescription_description}>Whipping cream, egg white, cinnamon</div>
                                  </div>
                              </div>
                              <div className={styles.menu_typeOfFood_dishWithDescription_divForBorder}></div>
                              <div className={styles.menu_typeOfFood_dishWithDescription_price}>$15</div>
                          </div>
                          <div className={styles.menu_typeOfFood_dishWithDescription}>
                              <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription}>
                                  <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_img}>
                                      <img src={imgLemonMeringuePie} alt='imgLemonMeringuePie' />
                                  </div>
                                  <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_titleDescription}>
                                      <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_titleDescription_title}>Lemon Meringue Pie</div>
                                      <div className={styles.menu_typeOfFood_dishWithDescription_imgAndTitleWithDescription_titleDescription_description}>Frozen pie crust, meringue, lemon</div>
                                  </div>
                              </div>
                              <div className={styles.menu_typeOfFood_dishWithDescription_divForBorder}></div>
                              <div className={styles.menu_typeOfFood_dishWithDescription_price}>$30</div>
                          </div>
                      </div>
                  </div>
              </div>
            <PageWithSlider />
            <OnlyImage />
            <Offers />
            <SecondMenu />
            <WhatWeOffer />
            <Blog />
            <Reservation />
            <Footer />
          </div>
      </>
  );
}

export default App;
