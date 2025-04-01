import styles from '../navigation.module.css'

const NavigationItem = ({name}) => {
    return (
        <div className={styles.menuItem}>{name}</div>
    )
}

export default NavigationItem