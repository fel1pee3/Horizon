import React, {useState} from "react"

import { GoSearch } from "react-icons/go";
import { IoMdCart } from "react-icons/io";

import "../../styles/Header.css"

export default function Header(){

    const [searchValue, setSearchValue] = useState('')

    return(
        <header className="header">

            <button className="logo">Horizon</button>

            <form method="get" className="search_bar">
                <input type="search"
                value={searchValue}
                placeholder="Buscar Produto"
                className="search_input"
                onChange={(e) => setSearchValue(e.target.value)}
                required/>

                <button type="submit" className="search_button"><GoSearch /></button>
            </form>

            <button className="cart_button">
                <IoMdCart />
                <span className="cart-status">0</span>
            </button>

        </header>
    )
}