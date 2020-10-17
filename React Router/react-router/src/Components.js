import React from 'react';
import {Link} from 'react-router-dom';

export const Home = ({location , match , history}) => { //Passed props from Route
    /*
    console.log(match);
    console.log(history);
    console.log(location);
    */

    return (
        <div className="home">
            Home
            <Link className="link" to='/about'>Go to about</Link>
        </div>
    );
}

export const About = ({history}) =>{
    return(
        <div className="about">
            About
            <button onClick = {() => {
                history.push('/contact');
            }}> Go to contact</button>
        </div>
    )
}

export const Contact = ({history}) => {
    return(
        <React.Fragment>
            <div>Contact Me</div>
            <button onClick={() => {
                history.push('/posts/:id');
            }}>Go to posts</button>
        </React.Fragment>
    );
}

export const Posts = ({match}) => {
    const check = (id) => {
        let num = id
        console.log(num)
        num === ':id' ? num = '/' : num = id
        return num; 
    }
 
    return(
    <div>Rendering post {check(match.params.id)} </div>
    )
}
