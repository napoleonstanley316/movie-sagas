import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import MovieItem from "../MovieItem/MovieItem";
import MovieDetails from "../MovieDetails/MovieDetails";
import AddMovie from "../AddMovie/AddMovie";


function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}
        <Route path="/details" component={MovieDetails} />
        {/* Add Movie page */}
        <Route path="/add" component={AddMovie} />
      </Router>
    </div>
  );
}

export default App;
