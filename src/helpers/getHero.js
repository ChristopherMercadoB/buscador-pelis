const getHero = async(title = 'batman') => {
    const url = `http://www.omdbapi.com/?apikey=b91df34f&t=${title}&plot=full`

    const resp = await fetch(url)

    if(!resp.ok){
        throw new Error('Error')
    }


    const data = await resp.json()

    

    const result = {
        id: data.imdbID,
        title: data.Title,
        year: data.Year,
        poster: data.Poster,
        plot: data.Plot,
        isOkay: true,
    }

    if(data === null){
        result.isOkay = false
    }

    return result
}

export default getHero