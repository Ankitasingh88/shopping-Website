import styles from '../navigation.module.css'
import { NavLink } from 'react-router-dom'

const NavigationItem = ({name}) => {
    return (
        <NavLink to={name.toLowerCase() === "home" ? "/" : name.toLowerCase()} className={styles.menuItem}>{name}</NavLink>
    )
}

export default NavigationItem