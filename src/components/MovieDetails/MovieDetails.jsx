import MovieList from "../MovieList/MovieList";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import MovieItem from "../MovieItem/MovieItem.jsx";

function MovieDetails() {
const movie = useSelector(state => state?.details[0])
console.log('details reducer returns:', movie);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "FETCH_DETAILS" });
    
      }, []);
  console.log(movie);

return (
    <div>
  <h3>{movie?.title} Details:</h3>
  <p>{movie?.description}</p>
  <img src={movie?.poster} />
  </div>
  );
}

export default MovieDetails;