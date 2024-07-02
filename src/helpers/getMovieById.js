const getById = async(id) => {
    const url = `http://www.omdbapi.com/?apikey=b91df34f&i=${id}&plot=full`

    const resp = await fetch(url)

    if(!resp.ok){
        throw new Error('No se encontraron peliculas con el id:' + id)
    }

    const data = await resp.json()

    if(data === null){
        return null
    }

    const movie = {
        title: data.Title,
        date: data.Released,
        duration: data.Runtime,
        genre: data.Genre,
        actors: data.Actors,
        description: data.Plot,
        img: data.Poster
    }

    return movie
};


export default getById