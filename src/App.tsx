import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Details } from './pages';
import React from 'react';
import './App.scss';

function App() {
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
          <Route exact path='/details/:id' component={Details} />
        </Switch>
      </Router>
      <div className='App-Foter'>
        <span>© Muhamed Delihasanovic, 2020</span>
        <a href='https://www.github.com/muhamedd136/movies' target='_blank'>
          Github
        </a>
      </div>
    </div>
  );
}

export default App;
