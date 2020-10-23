import React from 'react';
import './App.css';
import MovieList  from './components/MovieList';
import {MovieProvider} from './components/MovieContext'; //We need only Provider!
import {AddMovieForm} from './components/AddMovieForm'

import Nav from './components/Nav'
function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav/>
        <AddMovieForm/>
        <MovieList/>
      </div>
    </MovieProvider>
  );
}

export default App;
