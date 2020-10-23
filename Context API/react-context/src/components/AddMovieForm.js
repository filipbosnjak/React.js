import React, { useState,useContext } from 'react'
import {useForm} from './useForm';

import {MovieContext} from './MovieContext';

export const AddMovieForm = () => {
    /*
    const [name,setName] = useState('')
    const [genre,setGenre] = useState('')
    */
    const [state,setState] = useForm({name:'',genre:''})

    const [movies , setMovies] = useContext(MovieContext)

    const addMovie = (e) => {
        e.preventDefault();
        setMovies(curr => {
            return [...curr,{id:33412,...state,visible:false}]
        })
    }
    
    /*
    const nameUpdater = (e) => {
        setName(e.target.value)
    }
    const genreUpdater = (e) => {
        setGenre(e.target.value)
    }
    */

    return (
        <form className="form" onSubmit={addMovie}>
            <input type="text" name="name" value={state.name} onChange={setState} placeholder="Movie Name"/>
            <input type="text" name="genre" value={state.genre} onChange={setState} placeholder="Genre"/>
            <input type="submit"/>
        </form>
    )
}
