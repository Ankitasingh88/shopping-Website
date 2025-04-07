import Layout from './pages/Layout'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ProductPage from './pages/ProductPage'
import { useState } from 'react'

function App() {
  const[cartProducts, setCartProducts] = useState([]);

  const updateCart = (productToAdd) => {
    setCartProducts( [...cartProducts, productToAdd] )
  }

  const remove = (productToAdd) => {
    setCartProducts( [...cartProducts, productToAdd] )
  }

  return (
    <>
    <Routes>
      <Route element={<Layout cartItems={cartProducts} />} >
        <Route path="/" element={<Home addproduct={updateCart}/>} />
        <Route path="/about" element= { <About title="Hello World!" />} />
        
        <Route path="/women" element={ <ProductPage key="women" title="women" addProduct={updateCart} />} />
        <Route path="/men" element={ <ProductPage key="men" title="men" />} />
        <Route path="/kid" element={ <ProductPage key="kid" title="kid"  />} />
        <Route path="/accessories" element={ <ProductPage key="accessories" title="accessories"  />} />
        <Route path="/cosmetics" element={ <ProductPage key="cosmetics" title="cosmetics"  />} />
      </Route>
    </Routes>
    </>
 )
}
   
export default App