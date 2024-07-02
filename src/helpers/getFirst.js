const getFirst = async() => {
    const url = `https://www.omdbapi.com/?&page=2&apikey=b91df34f&type=movie&s=batman`
    const resp = await fetch(url)



    const {Search} = await resp.json()

    const array = Search.map(e=>({
        id: e.imdbID,
        title: e.Title,
        year: e.Year,
        poster: e.Poster
    }))

    return array


}


export default getFirst