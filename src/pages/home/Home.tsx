import { SwitchButtons } from '../../components/SwitchButtons/SwitchButtons';
import React, { useState, useEffect } from 'react';
import './Home.scss';
import { Tab } from '../../components/Tab/Tab';
import { withRouter } from 'react-router-dom';
import { movies, tvshows } from '../../api';

const Home = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [focusedTab, setFocusedTab] = useState(1);
  const [showsList, setShowsList] = useState([]);

  const getMovies = async () => {
    await movies
      .get()
      .then((response) => setMoviesList(response?.data?.results.slice(0, 10)))
      .catch((error) => console.log(error));
  };

  const getTvShows = async () => {
    await tvshows
      .get()
      .then((response) => setShowsList(response.data.results.slice(0, 10)))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getMovies();
    getTvShows();
  }, []);

  console.log(moviesList);
  console.log(showsList);

  return (
    <div className='Home'>
      <SwitchButtons handleFocus={setFocusedTab} />
      <div className='TabContent'>
        {/* Search bar */}
        {focusedTab === 1 ? (
          <Tab list={moviesList} />
        ) : (
          <div>
            <Tab list={showsList} />
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(Home);
