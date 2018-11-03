/**
 * Created by Guido on 31/10/2018.
 */
import React, {Component} from 'react';
import MovieRow from "../MovieRow/MovieRow";
import './MovieList.css';

class MovieList extends Component {

  render() {
    const movies = this.props.movies.map((m, i) =>
     <tr key={i}><MovieRow movie={m} k={i}
                           onEditClicked={this.props.onEditClicked}
                           onDeleteClicked={this.props.onDeleteClicked}/>
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