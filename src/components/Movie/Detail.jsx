import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getById from "../../helpers/getMovieById";
import "../../assets/css/Movies/Detail.css";

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [oneMovie, setOneMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  const getMovieById = async (id) => {
    const movi = await getById(id);
    setOneMovie(movi);
  };

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    getMovieById(id);
    setIsLoading(false)
  }, [id]);

  return (
    <>
    {isLoading ? <div>Loading...</div>:
      <div className="container-detail">
        <div className="img-detail">
          <img src={oneMovie.img} alt={oneMovie.title} />
        </div>
        <div className="text-detail">
          <h2>{oneMovie.title}</h2>
          <p>
            {oneMovie.description ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, temporibus. Velit accusamus provident maiores saepe dicta, commodi praesentium nemo nesciunt eos, nam eveniet unde iste officiis alias placeat? Ullam, explicabo!"}
          </p>
          <button className="btn" onClick={handleBack}>Volver</button>
        </div>
      </div>
      }
    </>
  );
};

export default Detail;
