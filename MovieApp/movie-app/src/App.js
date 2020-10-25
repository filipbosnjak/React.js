import React, {useEffect,useState} from 'react';
import './App.css';
import Movie from './components/Movie';

  const FEAUTURED_API =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
  
  const GENRE_API = 
    "http://api.themoviedb.org/3/genre/movie/list?api_key=04c35731a5ee918f014970082a0088b1";

  const SEARCH_API =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  //const movies = [1,2,3]
  
  const [movies, setMovies] = useState([]);
  const [genres , setGenres] = useState([]);
  const [search , setSearch] = useState('Mission');

  const active = true;

  useEffect(() => {
      fetch(FEAUTURED_API)
        .then((res) => res.json())
        .then((data) => {
          //console.log(data);
          //console.log(data.results[0].genre_ids[0])
          setMovies(data.results)});
  } , [])

  useEffect(() =>{
    fetch(GENRE_API)
      .then(res => res.json())
      .then((data) => {
        //console.log(data);
        setGenres(data);
      })
  } , [])//With empty array like that useEffect hook will run only once. That way we fetch genres only once

  const handleChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit = (e) =>{ //This function handles submit. Whether the user pressed enter or clicked search icon we take what he typed and fetch to the search api
    e.preventDefault()
    //console.log(search) 
    if(search){
    fetch(SEARCH_API+search)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results)
        
      })
    }    
  }
  
  return (
    <div className="App">
      
      <div className="header">
        <div className="title">Movie App</div>
        <form className="form" onSubmit={handleSubmit}>
            <input className="searchBar" type="text" name="search" placeholder="Search Movies..." onChange={handleChange}/>
            <a href="" className="btn" onClick={handleSubmit}>
                <i className="fas fa-search"></i>
            </a>
        </form> 
      </div>

      
      <div className="movies">
      {/*Remember: inside jsx we cant write js code outside currly braces {} */}
      
      {movies.map( (movie) => {
        return <Movie key={movie.id} data={movie} genreData={genres} active1={active} /*data={movie}*//>
      })}

      </div>

    </div>
  );
}

export default App;
