import { pages } from '../../../data'
import styles from '../navigation.module.css'
import NavigationItem from '../NavigationItem'

const DesktopNavigation = () => {
   return (
    <div className={styles.desktopMenu}>
        {pages.map((item, index) => <NavigationItem key={index} name={item} />)}
    </div>
   )
}

export default DesktopNavigation