import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGiftApi"

export const categoryCustomHook = (categoria) => {
    const [isLoading, setIsLoading] = useState(true)
    const [gifs, setGifs] = useState([])

    const getApiGifs = async()=>{
        const data = await getGifs(categoria)
        setGifs(data)
        setIsLoading( false )
    }
    useEffect(()=>{ //Solo cuando se renderiza el componente
        getApiGifs()
    }, [])
    return {
        gifs,
        isLoading
    }
}

