import {useState, useEffect} from 'react'
import Product from '../../components/Product'
import styles from './productPage.module.css'
import { getproductsFromCategory } from '../../data'

const ProductPage = ({ title, addproduct }) => {
    const[categoryProducts, setCategoryProducts] = useState(null)

    useEffect(()=> {
        setCategoryProducts(getproductsFromCategory(title))
    }, [])

    return (
        <>
        <h1 className={styles.pageTitle}>
            {title}
        </h1>
        <div className={styles.productsContainer}>
            {categoryProducts && categoryProducts.map((item, index) =>  <Product key={index} item={item} buyItem={addproduct} />)}       
        </div> 
        </>  
    )
}

export default ProductPage