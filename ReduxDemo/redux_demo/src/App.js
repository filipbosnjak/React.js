import './App.css';

import Posts from './components/Posts'
import Postform from './components/Postform'

import {Provider} from 'react-redux';

import store from './Store';

function App() {
  return (
    <Provider store={store}>{/** Store holds the whole state tree of our app*/}
      <div className="App">
        <Postform/>
        <hr/>
        <Posts/>
      </div>
    </Provider>
  );
}

export default App;
