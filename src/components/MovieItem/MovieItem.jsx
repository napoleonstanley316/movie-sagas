import MovieList from "../MovieList/MovieList";
import { useDispatch, useSelector } from "react-redux";

function MovieItem({movie}) {

    const dispatch = useDispatch()
    const handleMovieClick = (event) => {
        console.log(event);
        dispatch({ type: "MOVIE_DETAILS", payload: movie.id });
      
      };




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
}

export default MovieItem;