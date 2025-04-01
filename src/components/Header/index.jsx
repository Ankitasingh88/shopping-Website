import styles from './header.module.css'
import Logo from '../Logo'
import DesktopNavigation from '../Navigation/DesktopNavigation'
import MobileNavigation from '../Navigation/MobileNavigation'
import Search from '../Search'
import Cart from '../Cart'

const Header = () => {
    return (
        <header className={styles.header} >
            <MobileNavigation />
            <Logo />
            <DesktopNavigation />
            <div className={styles.iconContainer}>
                <Search />
                <Cart />
            </div>
        </header>
    )
}

export default Header