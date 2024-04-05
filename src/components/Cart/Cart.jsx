import React from "react";
import CartItens from "../CartItens/CartItem";
import { useContext } from "react";
import Context from "../../Context/AppContext";
import CurrencyConvert from "../../utils/CurrencyConvert";

import "../../styles/Cart.css"

export default function Cart(){

    const {cartItens, isCartVisible} = useContext(Context)

    const totalPrice = cartItens.reduce((acc, item) => item.price + acc, 0)

    return(
        <div className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
            <div className="cart-itens-products">

                { cartItens.map((cartItem)=> <CartItens key={cartItem.id} data={cartItem}/>)}

            </div>
            <div className="cart-resumo">
                Total: <spam className="value-price">{CurrencyConvert(totalPrice, 'BRL')}</spam>
            </div>
        </div>
    )
}