import styles from './category-tile.module.css'

const CategoryTile = ({ name, productNumber, featured = false }) => {

    const classToUse = () => {
        return name.replace("'s", "")
    }

    return (
        <div className={`${styles.category} ${styles[classToUse()]} ` + (featured ? styles.featured : '')}>
            <h2 className={styles.title}>
                {name === "women" | name === "men" | name === "kid" ? `${name}'s fashion` : name}
            </h2>
            <div className={styles.productInfo}>
                {featured ? 
                    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione blanditiis, velit autem incidunt ut, deleniti dolorum consequuntur repellat minus sequi, eum cupiditate esse quibusdam reprehenderit nostrum possimus libero corrupti accusantium!'
                    : `${productNumber} items`
                }
            </div>
            <div className={styles.shopLink}>Shop Now</div>
        </div>
    )
}

export default CategoryTile