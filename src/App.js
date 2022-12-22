import React, { useState } from 'react';
import axios from 'axios';

import Search from './Components/Search';
import Results from './Components/Results';
import Popup from './Components/Popup';
import TopMovies from './Components/TopMovies';
import RecentlyViewed from './Components/RecentlyViewed';

function App() {
  const [state, setState] = useState({
    s: '',
    results: [],
    selected: {},
    recentlyViewed: []
  });
  const apiSearch =
    'https://api.themoviedb.org/3/search/movie?api_key=2c0ba07be9914192e15c8e0188df0835';
  const apiTitle = 'https://api.themoviedb.org/3/movie/';

  const search = (e) => {
    if (e.key === 'Enter') {
      axios(apiSearch + '&query=' + state.s).then(({ data }) => {
        let results = data.results;

        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  const handleInput = (e) => {
    let s = e.target.value;

    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  const openPopup = (id) => {
    axios(
      apiTitle +
        id +
        '?api_key=2c0ba07be9914192e15c8e0188df0835&language=en-US'
    ).then(({ data }) => {
      let result = data;
  
      setState((prevState) => {
        return {
          ...prevState,
          selected: result,
          recentlyViewed: [result, ...prevState.recentlyViewed]
        };
      });
    });
  };

  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>EMDB</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <h1 className='ratedText'>Top Rated Movies</h1>
        <TopMovies />
        <Results results={state.results} openPopup={openPopup} />
        {typeof state.selected.title !== 'undefined' ? (
          <Popup selected={state.selected} closePopup={closePopup} />
        ) : (
          false
        )}
              <div className="recentText">
        <h2>Recently Viewed</h2>
      </div>
        <RecentlyViewed recentlyViewed={state.recentlyViewed} />
      </main>
    </div>
  );
}

export default App;
