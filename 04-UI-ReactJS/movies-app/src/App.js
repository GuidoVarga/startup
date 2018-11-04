import React, {Component} from 'react';
import './App.css';
import MoviesContainer from './components/MovieContainer/MoviesContainer';
import MovieFormContainer from './components/MovieFormContainer/MovieFormContainer';

class App extends Component {
  render() {
    return (
     <div className="Container">
       <MovieFormContainer/>
       <MoviesContainer/>
     </div>
    );
  }
}

export default App;
