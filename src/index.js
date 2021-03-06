import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App.js";
import { createStore, combineReducers, applyMiddleware } from "redux";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
// Import saga middleware
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import AddMovie from "./components/AddMovie/AddMovie";

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery("FETCH_MOVIES", fetchAllMovies);
  yield takeEvery("FETCH_GENRES", fetchAllGenres);
  yield takeEvery("MOVIE_DETAILS", fetchDetails);
  yield takeEvery("ADD_MOVIE", addMovie);
}

function* fetchAllMovies() {
  // get all movies from the DB
  try {
    const movies = yield axios.get("/api/movie");
    console.log("get all:", movies.data);
    yield put({ type: "SET_MOVIES", payload: movies.data });
  } catch (error) {
    console.log("get all movies error", error);
  }
}

function* fetchAllGenres() {
  // this logic will get the details for a specific movie.  I will provide the id.

  console.log("looking for details");
}

function* fetchDetails(action) {
    // get all movies from the DB
    try {
       let id = action.payload
        const response = yield axios.get(`/api/details/${action.payload}`);
        console.log('return movie with id of:', id, response);
        const results = response.data;
    
          yield put({ type: "SET_DETAILS", payload: results });
        
    } catch (error) {
      console.log("get details error", error);
    }
  }

  
function* addMovie(action) {

}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();
// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    default:
      return state;
  }
};

const details = (state = [], action) => {
  switch (action.type) {
    case "SET_DETAILS":
      return action.payload;
    default:
      return state;
  }
};


// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    details,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
