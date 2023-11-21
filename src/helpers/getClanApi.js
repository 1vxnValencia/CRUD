import { useState } from "react"
import { useEffect } from "react"

export const getClanApi = (endPoint) => {
    const [state, setState] = useState({
        data: [],
        isLoading: true,
        hasError: null,
    })

    const getClanData = async()=>{
        try{
            setState({
                ...state,
                isLoading: true,
            })
            const resp = await fetch(endPoint)
            const {forms} = await resp.json()
            // console.log(data)
            setState({
                data: forms,
                isLoading: false,
                hasError: null,
            })
            // return data
        }catch(error) {
            // console.log(error)
            setState({
                ...state,
                isLoading: false,
                hasError: error
            })
        }
    }

    useEffect(()=>{
        getClanData()
    },[endPoint])

    return {
        // data,
        // isLoading,
        // hasError,
        ...state
    }
}
