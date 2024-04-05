import React, { useContext } from "react";
import propTypes from 'prop-types'
import { BsCartPlus } from "react-icons/bs";
import CurrencyConvert from "../../utils/CurrencyConvert";
import Context from "../../Context/AppContext";

import "../../styles/ProductsCard.css"

export default function ProductCard({ data }){

    const { title, price, thumbnail } = data

    const {cartItens, setCartItens} = useContext(Context)

        const handleAddCart = () => setCartItens([ ...cartItens, data ]);


    return(
        <div className="card">

                <img
                    src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
                    alt="Product"
                    className="image-product"
                />
                <div className="caixa-infos">
                    <p className="name-product">{title}</p>
                    <p className="price-product">{CurrencyConvert(price, 'BRL')}</p>
                    <button
                        type="button" 
                        onClick={handleAddCart}
                        className="btn-cart"

                        >
                        <BsCartPlus />
                    </button>
                </div>

        </div>
    )
}

ProductCard.prototype = {
    data: propTypes.shape({}),
} .isRequired;