/**
 * Created by Guido on 31/10/2018.
 */
import React, {Fragment, Component} from 'react';
import LocalStorageManager from '../localStorageManager';
import MovieForm from './MovieForm';
import MovieList from './MovieList';

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
        <React.Fragment>
           <div className="column half">
              <section className="content">
                 <header>
                    <h2>Add your favourite movies</h2>
                 </header>
                 <MovieForm action={this.addMovie}/>
              </section>
           </div>
           <div className="column half">
              <section>
                 <header>
                    <h2>Your favourite movies list</h2>
                 </header>
                 <MovieList movies={this.state.movies}/>
              </section>
           </div>
        </React.Fragment>
      );
   }

}
export default MoviesContainer;
