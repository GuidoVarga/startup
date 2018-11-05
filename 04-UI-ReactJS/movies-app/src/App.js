import React, {Component} from 'react';
import './App.css';
import MovieListContainer from './components/MovieListContainer/MovieListContainer';
import MovieFormContainer from './components/MovieFormContainer/MovieFormContainer';

class App extends Component {
  render() {
    return (
     <div className="Container">
       <MovieFormContainer/>
       <MovieListContainer/>
     </div>
    );
  }
}

export default App;
