import Header from "../../components/Header"
import { Outlet } from "react-router-dom"

const Layout = ({cartItems}) => {
    return (
        <>
          <Header />
          <Outlet />
        </>
    )
}

export default Layout