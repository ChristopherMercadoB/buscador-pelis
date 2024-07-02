import React, { useContext, useEffect, useState } from "react";
import MovieContext from "../../contexts/MovieContext";
import { getMovies } from "../../helpers/getMovies";
import '../../assets/css/Searcher/header.css'

const Searcher = () => {
  const { onSearch, setMovie, inputValue, setInputValue, handleSearch } = useContext(MovieContext);
  const handleChange = ({ target }) => {
    setInputValue(target.value);
    console.log(target.value);
  };

  

  useEffect(() => {
    handleSearch();
  }, [inputValue]);

  return (
    <div className="header">
      <form>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          name="search"
          placeholder="Buscar pelicula..."
        />
      </form>
    </div>
  );
};

export default Searcher;
