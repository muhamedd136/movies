import { SwitchButtons, SearchBar, Tab } from '../../components';
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { movies, tvshows } from '../../api';
import './Home.scss';

const Home = () => {
  const [moviesQueryList, setMoviesQueryList] = useState([]);
  const [showQueryList, setShowQueryList] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [updateList, setUpdateList] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const [focusedTab, setFocusedTab] = useState(2);
  const [showsList, setShowsList] = useState([]);

  const handleQueryChange = (event: any) => {
    setSearchQuery(event.target.value);

    if (event.target.value.length < 3) {
      setIsSearching(false);
      setMoviesQueryList([]);
      setShowQueryList([]);
    } else {
      setIsSearching(true);
      setTimeout(() => searchTitles(searchQuery), 1000);
    }
  };

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

  const searchTitles = async (query: string) => {
    if (focusedTab === 1) {
      movies
        .search(query)
        .then((response) => setMoviesQueryList(response.data.results))
        .catch((error) => console.log(error));
    } else {
      tvshows
        .search(query)
        .then((response) => {
          setShowQueryList(response.data.results);
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    getMovies();
    getTvShows();
  }, []);

  useEffect(() => {
    if (searchQuery.length > 2) {
      searchTitles(searchQuery);
    }
  }, [focusedTab]);

  return (
    <div className='Home'>
      <SwitchButtons focus={focusedTab} handleFocus={setFocusedTab} />
      <div className='TabContent'>
        {/* Search bar */}
        <SearchBar value={searchQuery} handleChange={handleQueryChange} />
        {focusedTab === 1 ? (
          <Tab list={isSearching ? moviesQueryList : moviesList} />
        ) : (
          <div>
            <Tab list={isSearching ? showQueryList : showsList} />
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(Home);
