import styles from '../navigation.module.css'
import { pages } from '../../../data';
import { DotsThreeCircle } from "@phosphor-icons/react";
import NavigationItem from '../NavigationItem';
import { useState } from 'react';

const MobileNavigation = () => {
    const [showMenu, setShowMenu] = useState("inactive");

    const handleClick = () => {
        setShowMenu(showMenu === "inactive" ? "active" : "inactive") // showMenu =  not true
    }

    return (
        <div className={styles.mobileMenu}>
            <DotsThreeCircle size={32} onClick={handleClick} />
            <div className={`${styles.mobileMenuContent} ${styles[showMenu]}`}>
                {pages.map((item, index) => <NavigationItem key={index} name={item} />)}
            </div>
        </div>
    )
}

export default MobileNavigation