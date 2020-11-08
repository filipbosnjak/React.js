import React from 'react';
import './App.css';
import UseFetch from './hooks/UseFetch';
import Picture from './components/Picture'

const App =() => {

  const url = 'https://api-dev.insidetrak.interactive1.com/homepage/get-latest-images';

  const data = UseFetch(url);

  return (
    <React.Fragment>
      <div className="pagetitle">Gallery</div>
      <div className="gallery">
        
        { data === -1 ? <div>Loading...</div> : data.data.map( (picture) => {
        return <Picture 
          key={picture.id}
          imgUrl={picture.thumbnailUrls.imedia_300} 
          title={picture.title}
          authorScreenName={picture.authorScreenName} 
          createdOn={picture.createdOn}
          description={picture.description}
          /> 
        })
      }
      </div>
    </React.Fragment>
  );
}

export default App;
