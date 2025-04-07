import Header from "../../components/Header"
import { Outlet } from "react-router-dom"

const Layout = ({cartItems}) => {
    return (
        <>
          <Header productsInCart={cartItems} />
          <Outlet />
        </>
    )
}

export default Layout