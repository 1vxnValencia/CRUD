import React from 'react'
import { counterCH } from './hooks/counterCH'
import { getClanApi } from './helpers/getClanApi';

const Counter = () => {
    const { counter, incrementCounter } = counterCH(1);

    const url = `https://pokeapi.co/api/v2/pokemon/${counter}`

    const { data, isLoading, hasError } = getClanApi(url)

    const pokemon = !!data && data[0];

    return (
        isLoading
        ? <h4>Cargando...</h4>
        :
        <>
            <h3>Clan: {counter}</h3>
            <span>Nombre del pokemon: {pokemon.name}</span>
            <br />
            <button
                onClick={() => incrementCounter(1)}
                className='btn btn-primary'
            >
                +1
            </button>
        </>
        
    )
}

export default Counter
