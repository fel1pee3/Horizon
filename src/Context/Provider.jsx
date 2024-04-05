import React, { useState } from "react";  
import Context from "./AppContext";
import propTypes from 'prop-types'


export default function Provider({children}){

    const [loading, setLoading] = useState(true)
    const [cartItens, setCartItens] = useState([])
    const [products, setProducts] = useState([]);
    const [isCartVisible, setIsCartVisible] = useState(false);

    const value = {
        products,
        setProducts,
        loading, 
        setLoading,
        cartItens, 
        setCartItens,
        isCartVisible, 
        setIsCartVisible
    }

    return(
        <>
            <Context.Provider value={ value }>
                {children}
            </Context.Provider>
        </>
    )
}

Provider.prototype = {
    children: propTypes.any,
}.isRequired;