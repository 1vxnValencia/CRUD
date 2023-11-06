import React from 'react'
import PropType from 'prop-types'
import CardGif from './CardGif'
import { categoryCustomHook } from '../hooks/categoryCustomHook'
const Categoy = ({ categoria }) => {
    const { gifs, isLoading } = categoryCustomHook(categoria);
    return (
        <>
            <h4>{categoria}</h4>
            {
                isLoading && (<h3>Cargando......</h3>)
            }
            <div className='card-grid'>
                {
                    gifs.map( (item)=><CardGif key={item.id} {...item}/>)
                }
            </div>
            
        </>
    )
}

Categoy.propTypes = {
    categoria: PropType.string.isRequired
}
export {
    Categoy
}