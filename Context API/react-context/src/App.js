import React from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import { MovieProvider } from "./components/MovieContext"; //We need only Provider!
import { AddMovieForm } from "./components/AddMovieForm";

import Nav from "./components/Nav";
import Button from "./components/incrementor/Button";
import Count from "./components/incrementor/Count";
function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovieForm />
        <MovieList />
        <div>
          <Button />
          <Count />
        </div>
      </div>
    </MovieProvider>
  );
}

export default App;
