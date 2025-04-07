import { categoryInfo, newProducts } from '../../data'
import CategoryTile from '../../components/CategoryTile'
import styles from '../../components/CategoryTile/category-tile.module.css'
import Product from '../../components/Product'

const Home = ({addProduct}) => {
    return (
        <>
        <div className={styles.categoryTileContainer}>
          {categoryInfo && categoryInfo.map((item, index) => (   
          <CategoryTile key={index} {...item} />)
          )}
        </div>

        <div className="new-products">
          <h3 className="new-products__title">New Products</h3>
          {newProducts.map((item, index) => <Product key={index} item={item} buyItem={addProduct} />)}
        </div>
        </>
    )
}

export default Home