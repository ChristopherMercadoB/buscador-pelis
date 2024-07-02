import React, { useContext } from "react";
import MovieContext from "../../contexts/MovieContext";
import IndividualMovie from "./IndividualMovie";
import "../../assets/css/Movies/Movies.css";

const Movies = () => {
  const { movie, hero } = useContext(MovieContext);

  return (
    <>
      {movie && (
        <div className="movie-container">
          {movie.map((m) => (
            <IndividualMovie key={m.id} movie={m} />
          ))}
        </div>
      )}
    </>
  );
};

export default Movies;
