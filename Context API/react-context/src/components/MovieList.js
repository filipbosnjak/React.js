import React, { useState,useContext} from 'react' //When using context every component needs useContext hook and MovieContext component
import {MovieContext} from './MovieContext';

import Movie from './Movie'
export default function MovieList() {
    
    //The problem that context comes to solve is:
    //How to access the state from other components without passing them via props
    //Other solution would be lifting up the state which means moving the state to the app component
    //Problem with this approach is that movies state doesnt belong to the app component
    //Another problem is that we have to prop-drill the state to the children we want to render that state
    
    
    const [state, setState] = useContext(MovieContext)

    

    return (
        <div>
            {state.map((movie) => {
                let visible = movie.visible
                return (
                <div className="movie">
                    <Movie key={movie.id} name={movie.name} genre={movie.genre}/>
                   
                   { /*visible && <>
                    <Movie key={movie.id} name={movie.name} genre={movie.genre}/>
                    <botton className="button">Toggle Color</botton>
                   </>
                   */}
                </div>
                )
            })
            //console.log(state)
        }
        </div>
    )
}
