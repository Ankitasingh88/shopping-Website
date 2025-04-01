import { categoryInfo, newProducts } from '../../data'
import CategoryTile from '../../Components/CategoryTile'
import styles from '../../Components/CategoryTile/category-tile.module.css'
import Product from '../../Components/Product'


const Home = () => {
    return (
        <>
        <div className={styles.categoryTileContainer}>
          {categoryInfo && categoryInfo.map((item, index) => (   
          <CategoryTile key={index} {...item} />)
          )}
        </div>

        <div className="new-products">
          <h3 className="new-products__title">New Products</h3>
          {newProducts.map((item, index) =>  <Product item={item} key={index} />)}
        </div>
        </>
    )
}

export default Home