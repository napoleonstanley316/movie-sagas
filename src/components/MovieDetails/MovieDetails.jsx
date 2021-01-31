import MovieList from "../MovieList/MovieList";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import MovieItem from "../MovieItem/MovieItem.jsx";

function MovieDetails({movie}) {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "FETCH_DETAILS" });
    
      }, []);

return (

    <div key={movie.id}>
      <h3>{movie.title}</h3>
      <img
        src={movie.poster}
        alt={movie.title}
        onClick={handleMovieClick}
        
      />
      <p>{movie.description}</p>
      
    </div>
  );
}

export default MovieDetails;