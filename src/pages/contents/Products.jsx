import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Products(){

    const [caixaApi, setCaixaApi] = useState([])
    
    useEffect(()=>{
        const funcAsync = async () => {
            try{
                const response = await axios.get("https://api.mercadolibre.com/sites/MLB/search?q=MLB1430")
                setCaixaApi(response.data.results)
            } catch(erro){
                console.log("ERRO!!!!!!", erro)
            }
        }

        funcAsync()

    }, [])

    console.log(caixaApi)

    return(
        <>
            {caixaApi.map(produt => {
                <p>{produt.title}</p>
            })}
        </>
    )
}