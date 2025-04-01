import styles from './product.module.css'
import { getImageUrl } from '../../utils/functions'
import { getRandomImage } from '../../data'

const Product = ({item}) => {
    console.log(item)
    return (
        <div className={styles.product}>
            <img className={styles.productImage} src={getImageUrl(getRandomImage())}></img>
            <h4 className={styles.productName}>{item.name}</h4>
            <p className={styles.productPrice}>{item.price}</p>
        </div>
    )
}

export default Product