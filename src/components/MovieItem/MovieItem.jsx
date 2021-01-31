import MovieList from "../MovieList/MovieList";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import MovieDetails from "../MovieDetails/MovieDetails.jsx";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import {useHistory} from 'react-router-dom';


function MovieItem({movie}) {
const history = useHistory()
    const dispatch = useDispatch()
    const handleMovieClick = (event) => {
        console.log(event);
        dispatch({ type: "MOVIE_DETAILS", payload: movie.id });
    //     // ----- Stuck Here -----
    //     // I'm getting this information in the console.  How do take this information to its own page and display it?
    //     // Is this where the POST come into play?
    //   console.log(movie.title,':', movie.description);
      
      history.push('/details')
      };
   
    //   useEffect(() => {
    //     dispatch({ type: "FETCH_MOVIES" });
    //     dispatch({ type: "FETCH_GENRES" });
    //   }, []);
    


return (

    <div key={movie.id}>
      <h3>{movie.title}</h3>
      <img
        src={movie.poster}
        alt={movie.title}
        
        
      />
      <button onClick={handleMovieClick}>See Details</button>
    </div>
  );
}

export default MovieItem;