import React from "react";
import { useState, useContext } from "react";
import AxiosProducts from "../../api/AxiosProducts";
import Context from "../../Context/AppContext";

import { GoSearch } from "react-icons/go";

export default function Search(){

    const [searchValue, setSearchValue] = useState('')

    const{setProducts, setLoading} = useContext(Context)

    const handleSearch = async (evt) =>{
        evt.preventDefault()
        setLoading(true)
        
        const resultProducts = await AxiosProducts(searchValue)
        setProducts(resultProducts.results)
        setSearchValue("")
        setLoading(false)
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