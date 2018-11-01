import React, { Component } from 'react';
import './resources/css/App.css';
import './resources/css/grid.css';

import MoviesContainer from './components/MoviesContainer';

class App extends Component {
  render() {
    return (
        <div className="container">
            <div className="row clearfix">
                <MoviesContainer/>
            </div>
        </div>
    );
  }
}

export default App;
