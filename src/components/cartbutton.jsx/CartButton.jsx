import React from "react";
import Context from "../../Context/AppContext";
import { IoMdCart } from "react-icons/io";
import { useContext } from "react";

import "../../styles/Header.css"

export default function CartButton(){

    const {cartItens, isCartVisible, setIsCartVisible} = useContext(Context)

    return(
        <button 
            className="cart-button"
            onClick={()=> setIsCartVisible(!isCartVisible) }>
                <IoMdCart />
                <span className="cart-status">{cartItens.length}</span>
        </button>
    )
}