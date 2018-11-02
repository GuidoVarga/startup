/**
 * Created by Guido on 31/10/2018.
 */
import React, {Component, Fragment} from 'react';
import MovieRow from "../MovieRow/MovieRow";
import './MovieList.css';

class MovieList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const movies = this.props.movies.map((m, i) => <tr key={i}><MovieRow movie={m} k={i} action={this.props.action}/>
    </tr>);
    return (
     <React.Fragment>
       <table className="MovieList">
         <thead>
         <tr>
           <th>Movie</th>
           <th>Year</th>
           <th>Duration</th>
         </tr>
         </thead>
         <tbody>
         {movies}
         </tbody>
       </table>
     </React.Fragment>
    );
  }

}
export default MovieList;