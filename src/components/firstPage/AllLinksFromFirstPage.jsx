import React from 'react';
import {Link} from "react-router-dom";
import style from './AllLinksFromFirstPage.module.scss'

const AllLinksFromFirstPage = () => {
    return (
        <nav className={style.navbar}>
                <a className={style.navbar_firstLinka}>Home</a>
                <a className={style.navbar_linka} >About Us</a>
                <a className={style.navbar_linka} >Our Menu</a>
                <a className={style.navbar_linka} >Pages</a>
                <a className={style.navbar_linka} >Blog</a>
                <a className={style.navbar_linka} >Contact Us</a>
        </nav>
    );
};

export default AllLinksFromFirstPage;