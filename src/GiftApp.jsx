import { useState } from "react"
import AddCategory from "./components/AddCategory"
import {Categoy} from "./components/Categoy"

const GiftApp = ()=>{
    const [categorias, setCategorias]= useState(['Naruto'])

    const addNewCategory = (category)=>{
        if (categorias.includes(category)) return;
        setCategorias( [ category, ...categorias ] )
    }
    return (
        <>
            <h1>Gift App</h1>
            <AddCategory addNewCategory={addNewCategory} />

            {/*boton de busqueda*/}
            
            {/*mostrar lista de gifts */}
            {
                categorias.map( ( c ) => <Categoy key={c} categoria={c}/>)
            }
        </>
    )
}
export {
    GiftApp
}