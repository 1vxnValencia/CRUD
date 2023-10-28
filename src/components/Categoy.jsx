import React, {useEffect, useState} from 'react'
import PropType from 'prop-types'
import { getGifs } from '../helpers/getGiftApi'
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
            <ol>
                {
                    gifs.map( (item)=>{
                        return( <li key={item.id}>{item.title}</li> ) //Hacer de esto un componente
                    })
                }
            </ol>
        </>
    )
}

Categoy.propTypes = {
    categoria: PropType.string.isRequired
}
export {
    Categoy
}