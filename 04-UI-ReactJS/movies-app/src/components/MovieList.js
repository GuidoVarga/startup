/**
 * Created by Guido on 31/10/2018.
 */
import React, {Component} from 'react';

class MovieList extends Component {

   constructor(props) {
      super(props);
   }

   render() {
      const movies = this.props.movies.map((m, i) => <li key={i}>{m.name}</li>);
      return (
        <ul>
           {movies}
        </ul>
      );
   }

}
export default MovieList;