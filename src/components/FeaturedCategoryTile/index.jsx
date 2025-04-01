import styles from '../CategoryTile/category-tile.module.css'

const FeaturedCategoryTile = ({ name }) => {
    return (
        <div className={`${styles.category} ${styles.featured} ${styles[name]}`}>
            <h2 className={styles.title}>
                {name === "women" | name === "men" | name === "kid" ? `${name}'s fashion` : name}
            </h2>
            <div className={styles.productInfo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum asperiores, praesentium ut odit reprehenderit aliquid atque nisi obcaecati? Suscipit laborum aperiam at! Enim officiis quam eius, temporibus voluptatum culpa exercitationem.</div>
            <div className={styles.shopLink}>Shop Now</div>
        </div>
    )
}

export default FeaturedCategoryTile