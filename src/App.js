import React , { useState } from 'react'
import axios from 'axios'

import Search from './Components/Search'
import Results from './Components/Results'
import Popup from './Components/Popup'




function App() {
  const [state, setState] = useState ({
    s:"",
    results: [],
    selected: {}
  });
  const apiSearch = "https://api.themoviedb.org/3/search/movie?api_key=2c0ba07be9914192e15c8e0188df0835";
  const apiTitle ="  https://api.themoviedb.org/3/movie/"
  const apiRated ="https://api.themoviedb.org/3/movie/top_rated?api_key=2c0ba07be9914192e15c8e0188df0835&language=en-US&page=1"


  const search = (e) => {
    if (e.key === "Enter"){
      axios(apiSearch + "&query=" + state.s ).then(({data}) =>{
        let results = data.results;

        setState(prevState =>{
          return {...prevState, results: results}
        })
      });
    }
  }

  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState =>{
      return {...prevState, s: s}
    })

  }

  const openPopup = id => {
    axios(apiTitle + id + "?api_key=2c0ba07be9914192e15c8e0188df0835&language=en-US").then(({ data}) =>{
      let result = data;

      setState(prevState => {
        return {...prevState, selected: result}
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return {...prevState, selected: {}}
    });
  }


  return (
    <div className="App">
      <header className="App-header">
      <h1>EMDB</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search}/>
        <Results results={state.results} openPopup={openPopup}/>
       {(typeof state.selected.title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </main>

    </div>
  );
}

export default App;
