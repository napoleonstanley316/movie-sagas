import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";

function MovieList(movie) {
  const handleMovieClick = (event) => {
    console.log("movie clicked");
    dispatch({ type: "MOVIE_DETAILS", payload: movie.id });
  
  };

  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
    dispatch({ type: "FETCH_GENRES" });
  }, []);

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
              <h3>{movie.title}</h3>
              <img
                src={movie.poster}
                alt={movie.title}
                onClick={handleMovieClick}
              />
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
