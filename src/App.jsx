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
import Buttons from "./components/firstPage/buttons/Buttons";
import AllLinksFromFirstPage from "./components/firstPage/AllLinksFromFirstPage";

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
                              <img src="./assets/img/img.png" alt="imgARKA"/>
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
                            <img src="./assets/img/imgForDStory.png" alt="imgForDStory"/>
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
          </div>
      </>
  );
}

export default App;
