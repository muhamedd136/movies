import { setSearchQuery, setIsSearching } from '../../redux/home/actions';
import { SwitchButtons, SearchBar, Tab } from '../../components';
import React, { useState, useEffect } from 'react';
import { movies, tvshows } from '../../api';
import { connect } from 'react-redux';
import './Home.scss';

const Home = ({ focusedTab, searchQuery, setSearchQuery, isSearching, setIsSearching }) => {
  const [moviesQueryList, setMoviesQueryList] = useState([]);
  const [showQueryList, setShowQueryList] = useState([]);
  const [moviesList, setMoviesList] = useState([]);
  const [showsList, setShowsList] = useState([]);

  /** input handler */
  const handleQueryChange = (event: any) => {
    setSearchQuery(event.target.value);

    if (event.target.value.length < 3) {
      setIsSearching(false);
    } else {
      setTimeout(() => {
        setIsSearching(true);
        searchTitles(searchQuery);
      }, 1000);
    }
  };

  /** api calls */
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

  /** initial load on component render */
  useEffect(() => {
    getMovies();
    getTvShows();
  }, []);

  /** trigger search when tab is changed */
  useEffect(() => {
    //if we want to avoid calling the search api if there are results from previously switching tabs
    //we would use following condition
    //searchQuery.length > 2 && ((focusedTab === 1 && !moviesQueryList.length) || (focusedTab === 2 && !showQueryList.length))
    if (searchQuery.length > 2) {
      searchTitles(searchQuery);
    }
  }, [focusedTab]);

  return (
    <div className='Home'>
      <SwitchButtons />
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

/** redux methods */
const mapStateToProps = ({ home: { focusedTab, searchQuery, isSearching } }) => ({
  focusedTab,
  searchQuery,
  isSearching,
});

const mapDispatchToProps = (dispatch: any) => ({
  setSearchQuery: (query: string) => dispatch(setSearchQuery(query)),
  setIsSearching: (isSearching: boolean) => dispatch(setIsSearching(isSearching)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
