import { ShoppingCartSimple } from "@phosphor-icons/react";
import { useState } from "react";

const Cart = ({cartProduct}) => {
    const[showCart, setShowCart]= useState()
    return (
        <ShoppingCartSimple color="#333" size={32} />
    )
}

export default Cart