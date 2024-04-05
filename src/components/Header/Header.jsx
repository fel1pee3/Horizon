import React from "react"
import Search from "../Search/Search";
import CartButton from "../cartbutton.jsx/CartButton";

import "../../styles/Header.css"

export default function Header(){
    return(
        <header className="header">

            <button className="logo">Horizon</button>

            <Search />

            <CartButton/>

        </header>
    )
}