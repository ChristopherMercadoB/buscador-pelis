const getMovies = async (title = 'After') => {
  if (title.lenght <= 4) return;

  const resp = await fetch(
    `http://www.omdbapi.com/?apikey=b91df34f&s=${title}`
  );
  if (!resp.ok) {
    throw new Error("No se pudo conectar");
  }

  const data = await resp.json();

  if (!data || !data.Search) {
    throw new Error("No hay data");
  }

  const withPortada = data.Search.filter(e=> e.Poster !== null)

  const moviesFound = withPortada.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

  return moviesFound;
};

export { getMovies };
