/**
 * Created by Guido on 31/10/2018.
 */
import React, {Fragment, Component} from 'react';
import LocalStorageManager from '../localStorageManager';
import MovieForm from "./MovieForm";

class MoviesContainer extends Component {

   constructor(props) {
      super(props);
      this.state = {
         movies: []
      };
      this.addMovie = this.addMovie.bind(this);
   }

   componentDidMount() {
      const movies = LocalStorageManager.getAll();
      this.setState({
         movies: movies
      });
   }

   addMovie(movie) {

      LocalStorageManager.save(movie.name, movie);
      const movies = this.state.movies;
      this.setState({
         movies: [...movies, movie]
      });
      console.log(this.state.movies);
   }

   render() {

      return (
         <div>
            <section>
               <header>
                  <h2>Add your favourite movies</h2>
               </header>
               <MovieForm action={this.addMovie}/>
            </section>
         </div>
      );
   }
}
export default MoviesContainer;
