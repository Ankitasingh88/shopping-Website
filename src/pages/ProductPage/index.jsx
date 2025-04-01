import Product from '../../Components/Product'
import styles from './productPage.module.css'

const ProductPage = ({ title, categoryProducts }) => {
    console.log(categoryProducts)
    return (
         <>
        <h1 className={styles.pageTitle}>
            {title}
        </h1>
        <div className={styles.productContainer}>
            {categoryProducts && categoryProducts.map((item, index) =>  <Product key={index} item={item} />)}
            
            </div> 
        </>  
    )
}

export default ProductPage