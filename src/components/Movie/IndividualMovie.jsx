import React from "react";
import "../../assets/css/Movies/IndividualMovie.css";
import { Link } from "react-router-dom";

const IndividualMovie = ({ movie }) => {
  const { id, title, year, poster } = movie;
  return (
    <div className="card">
      <img className="img" src={poster} alt="" />
      <div className="text-container">
        <h3>{title}</h3>
        <h3>{year}</h3>
      </div>
      <Link className="btn" to={`/Detail/${id}`}>
        Ver
      </Link>
    </div>
  );
};

export default IndividualMovie;
