import React from "react"
import Search from "../Search/Search";

import { IoMdCart } from "react-icons/io";

import "../../styles/Header.css"

export default function Header(){
    return(
        <header className="header">

            <button className="logo">Horizon</button>

            <Search />

            <button className="cart_button">
                <IoMdCart />
                <span className="cart-status">0</span>
            </button>

        </header>
    )
}