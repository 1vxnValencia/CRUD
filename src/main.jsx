import React from 'react'
import ReactDOM from 'react-dom/client'
import { GiftApp } from './GiftApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GiftApp></GiftApp>
  </React.StrictMode>,
)
/*
Estructura de archivos react 
Props
prop types
sprint operation
huks : useState, renderización de información
     : useEffect
*/


/*
Examen tw2 p1
mostrar peliculas tmdb api

-> Now playing
-> Populares
    mostrar 3 peliculas 
    para cada pelicula:
      -titulo
      -valoracion
        o
    para cada pelicula, nostrar los actores de dicha pelicula

*/