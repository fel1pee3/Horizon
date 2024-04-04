import React from "react";
import { useState } from "react";

import { GoSearch } from "react-icons/go";

export default function Search(){

    const [searchValue, setSearchValue] = useState('')

    const handleSearch = (evt) =>{
        evt.preventDefault()
        alert("Deu certo")
    }

    return(
        <>
            <form className="search_bar" onSubmit={handleSearch}> 
                <input type="search"
                value={searchValue}
                placeholder="Buscar Produto"
                className="search_input"
                onChange={(e) => setSearchValue(e.target.value)}
                required/>

                <button type="submit" className="search_button"><GoSearch /></button>
            </form>
        </>
    )
}