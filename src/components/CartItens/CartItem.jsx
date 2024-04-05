import React, { useContext } from "react";
import { TbTrashX } from "react-icons/tb";
import propTypes from 'prop-types'
import CurrencyConvert from "../../utils/CurrencyConvert";

import "../../styles/CartItens.css"
import Context from "../../Context/AppContext";

export default function CartItens( {data}) {

    const {cartItens, setCartItens} = useContext(Context)
    const { id, title, price, thumbnail } = data

    const handleRemoveItem = () => {
        const updateItem = cartItens.filter((item) => item.id != id)
        setCartItens(updateItem)
    }

    return(
        <div className="cart-itens">
            <img
                src={thumbnail}
                alt="Imagem do produto"
                className="image-cart-item"
            />

            <div className="content-cart-item">
                <p className="title-cart-item">{title}</p>
                <p className="price-cart-item">{CurrencyConvert(price, 'BRL')}</p>
            </div>
                <button
                    className="button-remove-item"
                    type="button"
                    onClick={handleRemoveItem}
                    >
                        <TbTrashX />
                </button>
        </div>
    )
}

CartItens.propTypes = {
    data: propTypes.object
}.isRequired;