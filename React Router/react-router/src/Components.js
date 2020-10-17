import * as React from 'react';
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
        id === ':id' ? id = '0' : console.log()
        return id; 
    }
    let id = match.params.id;

      React.useEffect(() => {
    // //     fetch(`api.example.com/posts/${match.example.id}`).then(res => res.json()).then(...)
         console.log(`Called: fetch(api.example.com/posts/${id}).then(res => res.json()).then(data => usingData(data))...) `);
      } , [id]) //We //listen here for a change in the id
    
    return(
    <div>Rendering post {check(match.params.id)} {/*JSX!!*/} </div> //Javascript /* We can now use this id - eg. would be we can fetch sth from the api  */
    )
}
