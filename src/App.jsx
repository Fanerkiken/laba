import styles from './App.module.scss';
import { ReactSVG } from "react-svg";
import logo from '../src/assets/img/mainLogo.svg'
import instagramLogo from './assets/img/instagramLogo.svg'
import facebookLogo from './assets/img/facebookLogo.svg'
import twitterLogo from './assets/img/twitterLogo.svg'
import pinterestLogo from './assets/img/pinterestLogo.svg'
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
                  <div className={styles.page2_information}></div>
              </div>
          </div>
      </>
  );
}

export default App;
