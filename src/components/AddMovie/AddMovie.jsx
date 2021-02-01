import MovieList from "../MovieList/MovieList";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import MovieDetails from "../MovieDetails/MovieDetails.jsx";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import {useHistory} from 'react-router-dom';


function AddMovie(props) {

    const dispatch = useDispatch();
    const [movie, setMovie] = useState('');



    // Called when the submit button is pressed
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({type: 'ADD_MOVIE', payload: movie})    
        clearMovieFields();
    }
      // Clear fields of the form by resetting the user
      const clearMovieFields = () => {
        setMovie('');
    }

return (
<div>
    <h3>Add Movie</h3>
    <form onSubmit={handleSubmit}>
    <input onChange={(event) => setMovie(event.target.value)} 
            placeholder="Movie Title" 
            value={movie.title}
            />
             <input onChange={(event) => setMovie(event.target.value)} 
            placeholder="Description" 
            value={movie.description}
            />
    <input type="submit" value="Add Movie" />
</form>

</div>

  )

}

export default AddMovie;



