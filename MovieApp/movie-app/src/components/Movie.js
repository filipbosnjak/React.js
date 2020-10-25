import React, {useState,useEffect} from 'react'

const IMG_API = 
"https://image.tmdb.org/t/p/w1280";

const Movie = ({data }) => {
    
    const [active , setActive] = useState(false)

    const genreData = {"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]}
    //Fetching to the genre api doesnt get the results every time so the genreData.foreach gets an error
    //console.log(genreData);
    
    let {title , poster_path , overview , vote_average , genre_ids} = data;
    let getGenre = (genreData , genre_ids) => {
        let movieGenres = [] //For each movie component we create its own genre array
        
        genre_ids.forEach( (item) => { //We already have the genre ids and we need to map them to the actual string values
            //console.log(item)
            
            genreData.genres.forEach( (obj) => {
                if(item === obj.id){
                    movieGenres.push(obj.name)
                }
            })
            
        })
        
        
        return movieGenres;
    }
    const movieG = getGenre(genreData,genre_ids);
    //console.log(movieG)

    const setClass = (vote) => {
        if(vote === 0){
            return
        }
        if(vote<4){
            return 'red'
        }else if(vote >=4 && vote<6){
            return 'orange'
        }else if(vote>=6 && vote <7){
            return 'light-green'
        }else if(vote>=7){
            return 'green'
        }
    }
    
    return (
        <div className="movie">
            <img src={IMG_API + poster_path} alt={title} onClick={() => setActive((curr) =>!curr)}/>
            
            <div onClick={() => setActive(!active)} className={ active ? "movie-over active" : "movie-over"}>
                <h2>Overview:</h2>
                <p>{overview}</p>
                <p>Genre:</p>
                <span>{movieG.map((item)=>{
                    return item + ', ';
                })}</span>
            </div>
            
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={setClass(vote_average)}>{vote_average}</span>
                {/*<span>{movieG.map((item)=>{
                    return item;
                })}</span>*/}
            </div>
        </div>
    )
}
export default Movie;