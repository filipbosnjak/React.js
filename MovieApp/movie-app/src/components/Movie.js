import React from 'react'

const IMG_API = 
"https://image.tmdb.org/t/p/w1280";

const Movie = ({data , genreData}) => {
    console.log(genreData);
    let {title , poster_path , overview , vote_average , genre_ids} = data;
    let getGenre = (genreData , id) => {
        let movieGenres = []
        id.forEach((id) =>{
            genreData.forEach((genre)=>{
                if(genre.id === id){
                    movieGenres.push(genre.name);
                }
            })
        })
        
        return movieGenres;
    }
    //console.log(getGenre(genreData,genre_ids));
    return (
        <div className="movie">
            <img src={IMG_API + poster_path} alt={title}/>
            <div className="movie-info">
                <h3>{title}</h3>
                <span>{vote_average}</span>
                <span></span>
            </div>
        </div>
    )
}
export default Movie;