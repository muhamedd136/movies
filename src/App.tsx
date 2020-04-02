import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { movies, tvshows } from './api';
import './App.scss';
import { Home, Details } from './pages';

function App() {
  // const getMovies = async () => {
  //   await movies
  //     .get()
  //     .then((response) => console.log(response?.data?.results))
  //     .catch((error) => console.log(error));
  // };

  // const getTvShows = async () => {
  //   await tvshows
  //     .get()
  //     .then((response) => console.log(response.data.results))
  //     .catch((error) => console.log(error));
  // };

  // const searchMovies = async () => {
  //   await movies
  //     .search('too fast')
  //     .then((response) => console.log(response.data.results))
  //     .catch((error) => console.log(error));
  // };

  // const searchTvShows = async () => {
  //   await tvshows
  //     .search('fast')
  //     .then((response) => console.log(response.data.results))
  //     .catch((error) => console.log(error));
  // };

  // const getTvShowDetails = async () => {
  //   await tvshows
  //     .getDetails(46874)
  //     .then((response) => console.log(response.data))
  //     .catch((error) => console.log(error));
  // };

  // const getMovieDetails = async () => {
  //   await movies
  //     .getDetails(1891)
  //     .then((response) => console.log(response.data))
  //     .catch((error) => console.log(error));
  // };

  // useEffect(() => {
  //   getMovies();
  //   getTvShows();
  //   searchMovies();
  //   searchTvShows();
  //   getTvShowDetails();
  //   getMovieDetails();
  // }, []);

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/details' component={Details} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
