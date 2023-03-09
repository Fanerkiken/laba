import React from 'react';
import styles from './Blog.module.scss'
import imgBlogFirst from '../assets/img/imgBlogFirst.png'
import Buttons from "./firstPage/buttons/Buttons";
import imgBlogSecond from '../assets/img/imgBlogSecond.png'

const Blog = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container_title}>
                <div className={styles.container_title_captain}>BLOG</div>
                <div className={styles.container_title_mainTitle}>Be First Who Read News</div>
                <div className={styles.container_title_description}>Explore the latest stories about our dishes, offers,</div>
                <div className={styles.container_title_description}>events and future plans here.</div>
            </div>
            <div className={styles.container_shortEvents}>
                <div className={styles.container_shortEvents_card}>
                    <div className={styles.container_shortEvents_card_imgWithButton}>
                        <img src={imgBlogFirst} alt="imgBlogFirst"/>
                        <div className={styles.container_shortEvents_card_imgWithButton_buttonOnImg}></div>
                        <div className={styles.container_shortEvents_card_imgWithButton_buttonOnImg_buttonViewMore}>
                            <Buttons>View More</Buttons>
                        </div>
                    </div>
                    <div className={styles.container_footer}>
                        <div className={styles.container_footer_pos}>
                            <div className={styles.container_footer_pos_captain}>DELICIOUS</div>
                            <div className={styles.container_footer_pos_captain}>MARCH 19, 2022</div>
                        </div>
                        <div className={styles.container_footer_mainTitle}>The Legend of US Cuisine: The Story of Hungry People</div>
                        <div className={styles.container_footer_description}>Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.</div>
                    </div>
                </div>
                <div className={styles.container_shortEvents_card}>
                    <div className={styles.container_shortEvents_card_imgWithButton}>
                        <img src={imgBlogSecond} alt="imgBlogSecond"/>
                        <div className={styles.container_shortEvents_card_imgWithButton_buttonOnImg}></div>
                        <div className={styles.container_shortEvents_card_imgWithButton_buttonOnImg_buttonViewMore}>
                            <Buttons>View More</Buttons>
                        </div>
                    </div>
                    <div className={styles.container_footer}>
                        <div className={styles.container_footer_pos}>
                            <div className={styles.container_footer_pos_captain}>COKING</div>
                            <div className={styles.container_footer_pos_captain}>MARCH 19, 2022</div>
                        </div>
                        <div className={styles.container_footer_mainTitle}>The Most Popular Delicious Food of Mediterranean Cuisine</div>
                        <div className={styles.container_footer_description}>Strategies on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;