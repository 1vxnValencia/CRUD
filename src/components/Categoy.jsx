import React, {useEffect, useState} from 'react'
import PropType from 'prop-types'
import { getGifs } from '../helpers/getGiftApi'
import CardGif from './CardGif'
const Categoy = ({ categoria }) => {
    const [gifs, setGifs] = useState([])
    const getApiGifs = async()=>{
        const data = await getGifs(categoria)
        setGifs(data)
    }
    useEffect( ()=>{ //Solo cuando se renderiza el componente
        getApiGifs()
    }, [])
    

    return (
        <>
            <h4>{categoria}</h4>
            {
                gifs.map( (item)=>{
                    return (
                        <div className='card-grid' key={item.id}>
                            <CardGif {...item}/>
                        </div>
                    )
                })
            }
        </>
    )
}

Categoy.propTypes = {
    categoria: PropType.string.isRequired
}
export {
    Categoy
}