import React from 'react'

const CardGif = ({title, url})=> {
  return (
    <div>
        <p>{title}</p>
        <img src={url} alt={title} />
    </div>
  )
}
export default CardGif