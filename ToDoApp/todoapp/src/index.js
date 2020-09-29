import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>

    {/* Comment in JSX - We have to use curly brackets only when commenting inside of JSX TAGS!*/}
    {/* Here we add all our components we want to render */}

    <App />             {/* <-- Here is the App component passed to be rendered to a root. In App class we add all other components we want to render */}
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
