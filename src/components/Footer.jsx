import React from 'react'
import styles from './Footer.module.scss'
import logo from '../assets/img/mainLogo.svg'
import instagramLogo from '../assets/img/instagramLogo.svg'
import facebookLogo from '../assets/img/facebookLogo.svg'
import twitterLogo from '../assets/img/twitterLogo.svg'
import pinterestLogo from '../assets/img/pinterestLogo.svg'
import { ReactSVG } from 'react-svg'


const Footer = () => {
  return (
    <div className={styles.box}>
      <div className={styles.topContainer}>
        <div className={styles.topContainer_header}>
          <div className={styles.topContainer_header_hashtag}>#TheTastEat</div>
          <div className={styles.topContainer_header_svgLogo}>
            <ReactSVG src={logo}/>
          </div>
          <div className={styles.topContainer_header_socialMedia}>
            <div className={styles.topContainer_header_socialMedia_1}><ReactSVG src={instagramLogo} /></div>
            <div className={styles.topContainer_header_socialMedia_2}><ReactSVG src={facebookLogo} /></div>
            <div className={styles.topContainer_header_socialMedia_3}><ReactSVG src={pinterestLogo} /></div>
            <div className={styles.topContainer_header_socialMedia_4}><ReactSVG src={twitterLogo} /></div>
          </div>
        </div>
        <div className={styles.topContainer_main}>
          <div className={styles.topContainer_main_contact}>
            <div className={styles.topContainer_main_contact_captain}>CONTACT</div>
            <div className={styles.topContainer_main_contact_address}>
              <div className={styles.topContainer_main_contact_address_1}>5 Rue Dalou, 75015 Paris</div>
              <div className={styles.topContainer_main_contact_address_2}>+123 456 789</div>
              <div className={styles.topContainer_main_contact_address_3}>josefin@mail.com</div>
            </div>
          </div>
          <div className={styles.topContainer_main_inpSub}>
            <div className={styles.text}>Join our mailing list for updates,</div>
            <div className={styles.text}>Get news & offers events.</div>
            <div className={styles.topContainer_main_inpSub_containerToDiv}>
              <div className={styles.topContainer_main_inpSub_containerToDiv_email}>
                <div className={styles.topContainer_main_inpSub_containerToDiv_email_description}>Email</div>
                <div className={styles.topContainer_main_inpSub_containerToDiv_email_subscribe}>Subscribe</div>
              </div>
            </div>
          </div>
          <div className={styles.topContainer_main_workingHours}>
            <div className={styles.topContainer_main_workingHours_captain}>WORKING HOURS</div>
            <div className={styles.topContainer_main_workingHours_timetable}>
              <div className={styles.topContainer_main_workingHours_timetable_1}>
                <div className={styles.day}>Mon – Fri:</div>
                <div className={styles.time}>7.00am – 6.00pm</div>
              </div>
              <div className={styles.topContainer_main_workingHours_timetable_1}>
                <div className={styles.day}>Sat:</div>
                <div className={styles.time}>7.00am – 6.00pm</div>
              </div>
              <div className={styles.topContainer_main_workingHours_timetable_1}>
                <div className={styles.day}>Sun:</div>
                <div className={styles.time}>8.00am – 6.00pm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.botContainer}>
        <div className={styles.botContainer_footer}>
          <div className={styles.botContainer_footer_firstDescription}>
            <div className={styles.whiteTextFooter}>© Copyright - TastEat | Designed by</div>
            <div className={styles.goldTextFooter}>VictorFlow</div>
            <div className={styles.whiteTextFooter}>- Powered by</div>
            <div className={styles.goldTextFooter}>Webflow</div>
          </div>
          <div className={styles.botContainer_footer_secondDescription}>
            <div className={styles.goldTextFooter}>Styleguide</div>
            <div className={styles.goldTextFooter}>Licenses</div>
            <div className={styles.goldTextFooter}>Protected</div>
            <div className={styles.goldTextFooter}>Not Found</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer