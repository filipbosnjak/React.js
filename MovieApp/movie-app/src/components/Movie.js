import React, {useState,useEffect} from 'react'

const IMG_API = 
"https://image.tmdb.org/t/p/w1280";

const Movie = ({data , genreData }) => {
    
    const [active , setActive] = useState(false)

    //console.log(genreData);
    
    let {title , poster_path , overview , vote_average , genre_ids} = data;
    let getGenre = (genreData , genre_ids) => {
        let movieGenres = []
        
        genre_ids.forEach( (item) => {
            console.log(item)
            
            genreData.genres.forEach( (obj) => {
                if(item === obj.id){
                    movieGenres.push(obj.name)
                }
            })
            
        })
        
        
        return movieGenres;
    }
    //const movieG = getGenre(genreData,genre_ids);
    //console.log(movieG)
    
    return (
        <div className="movie">
            <img src={IMG_API + poster_path} alt={title} onClick={() => setActive((curr) =>!curr)}/>
            
            <div onClick={() => setActive(!active)} className={ active ? "movie-over active" : "movie-over"}>
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>
            
            <div className="movie-info">
                <h3>{title}</h3>
                <span>{vote_average}</span>
                {/*<span>{movieG.map((item)=>{
                    return item;
                })}</span>*/}
            </div>
        </div>
    )
}
export default Movie;