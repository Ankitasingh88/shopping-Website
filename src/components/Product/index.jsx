import styles from './product.module.css'
import { getImageUrl } from '../../utils/functions'
import { getRandomImage } from '../../data'

const Product = ({ item, buyItem }) => {
    const handleClick = () => {
        buyItem(item) //updateCart(item)
    }
   
    return (
        <div className={styles.product}>
            <img className={styles.productImage} src={getImageUrl(getRandomImage())}></img>
            <h4 className={styles.productName}>{item.name}</h4>
            <p className={styles.productPrice}>{item.price}</p>
            <button className={styles.addToCart} onClick={handleClick}>ADD TO CART</button>
        </div>
    )
}

export default Product