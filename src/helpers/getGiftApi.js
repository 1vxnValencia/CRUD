export const getGifs = async(categoria) => {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=GrEGzNJTech35q1hHORXC0Yl4AILIfWS&q=${categoria}&limit=2`
    const datas = await fetch(url);
    const { data } = await datas.json()
    const datos = data.map( (item)=>{
        return {
            'id':item.id,
            'title':item.title,
            'url':item.images.downsized_medium.url
        }
    })
    
    // console.log(datos)
    return datos;
}