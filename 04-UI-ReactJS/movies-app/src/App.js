import React, {Component} from 'react';
import './App.css';


import MoviesContainer from './components/MovieContainer/MoviesContainer';

class App extends Component {
  render() {
    return (
     <div className="Container">
       <MoviesContainer/>
     </div>
    );
  }
}

export default App;
