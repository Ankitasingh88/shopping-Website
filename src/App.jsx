import Header from './components/Header'
import { categoryInfo } from './data'
import CategoryTile from './components/CategoryTile'
import styles from './components/CategoryTile/category-tile.module.css'
function App() {

  return (
    <>
      <Header />
      <div className={styles.categoryTileContainer}>
        {categoryInfo && categoryInfo.map((item, index) => (
          <CategoryTile key={index} {...item} />)
        )}
      </div>
    </>
  )
}

export default App
