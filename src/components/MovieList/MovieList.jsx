import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";
import MovieItem from "../MovieItem/MovieItem.jsx";
import AddMovie from "../AddMovie/AddMovie.jsx";
import { HashRouter as Router, Route, Link } from "react-router-dom";

function MovieList(movie) {
  console.log(movie);

  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
    dispatch({ type: "FETCH_GENRES" });
  }, []);

  return (
    <Router>
       <Link to="/add">Add New Movie</Link>
      <main>
        <h1>MovieList</h1>
        <div>
          <section className="movies">
            {movies.map((movie) => (
              <MovieItem movie={movie} />
            ))}
          </section>
        </div>
      </main>

      <Route path="/add" component={AddMovie} />
    </Router>
  );
}

export default MovieList;
