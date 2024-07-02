import React, { useEffect, useState } from "react";
import MovieContext from "./MovieContext";
import { getMovies } from "../helpers/getMovies";
import getFirst from "../helpers/getFirst";
import getHero from "../helpers/getHero";

const MovieProvider = ({ children }) => {
  const [hero, setHero] = useState({});
  const [movie, setMovie] = useState([]);
  const [inputValue, setInputValue] = useState();
  const onSearch = (value) => {
    setMovie([...value]);
  };

  const handleSearch = async () => {
    try {
      const movies = await getMovies(inputValue);
      if (movies.Error) {
        setMovie([]);
      }
      onSearch([...movies]);
      console.log(movies);
    } catch (err) {
      throw new Error(err.message);
    }

  };

  const handleHeroSearch = async () => {
    try {
      const heros = await getHero(inputValue);
      if (!heros.isOkay) {
        setHero({})
      }
      setHero(heros);
      console.log(heros);
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const setDefault = async () => {
    const def = await getFirst();
    setMovie([...def]);
  };

  const setHeroDefault = async () => {
    const heroDef = await getHero();
    setHero(heroDef);
  };

  useEffect(() => {
    setDefault();
    setHeroDefault();
  }, []);
  return (
    <MovieContext.Provider
      value={{
        movie,
        setMovie,
        onSearch,
        setDefault,
        hero,
        inputValue,
        setInputValue,
        handleSearch,
        handleHeroSearch
      }}
    >

      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
