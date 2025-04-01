import Layout from './pages/Layout'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ProductPage from './pages/ProductPage'
import { womenProducts, menProducts, kidProducts, accessoriesProducts, cosmeticsProducts } from './data'

function App() {
  return (
    <>
    <Routes>
      <Route element={<Layout />} >
        <Route path="/" element={<Home />} />
        <Route path="/about" element= {<About title="Hello World!" />} />
        <Route path="/women" element={ <ProductPage title="women" categoryProducts={womenProducts}/>} />
        <Route path="/men" element={ <ProductPage title="men" categoryProducts={menProducts} />} />
        <Route path="/kid" element={ <ProductPage title="kid" categoryProducts={kidProducts} />} />
        <Route path="/accessories" element={ <ProductPage title="accessories" categoryProducts={accessoriesProducts} />} />
        <Route path="/cosmetics" element={ <ProductPage title="cosmetics" categoryProducts={cosmeticsProducts} />} />
      </Route>
    </Routes>
    </>
 )
}
   
export default App