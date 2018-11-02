/**
 * Created by Guido on 31/10/2018.
 */
import React, {Fragment, Component} from 'react';
import LocalStorageManager from '../../localStorageManager';
import MovieForm from '../MovieForm/MovieForm';
import MovieList from '../MovieList/MovieList';
import Modal from 'react-modal';

class MoviesContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      movieInEdition: {},
      keyInEdition: null,
      modalIsOpen: false
    };

    this.addMovie = this.addMovie.bind(this);
    this.showMovieEditForm = this.showMovieEditForm.bind(this);
    this.editMovie = this.editMovie.bind(this);
    this.loadMovies = this.loadMovies.bind(this);
    this.hideMovieEditForm = this.hideMovieEditForm.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.suscribeBeforeUnload();
    Modal.setAppElement('#root');
  }

  componentDidMount() {
    this.loadMovies();
  }

  componentWillUnmount() {
    //LocalStorageManager.saveAll(this.state.movies); Doesn't work
  }

  suscribeBeforeUnload() {
    window.addEventListener("beforeunload", (ev) => {
      ev.preventDefault();
      LocalStorageManager.saveAll(this.state.movies)
    });
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {

  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  loadMovies() {
    const movies = LocalStorageManager.getAll();
    this.setState({
      movies: movies
    });
  }

  addMovie(movie) {
    const movies = this.state.movies;
    this.setState({
      movies: [...movies, movie]
    });
    //LocalStorageManager.save(movie);
  }

  editMovie(key, movie) {

    const movies = this.state.movies;
    movies[key] = movie;
    this.setState({
      movies: movies
    });
    //LocalStorageManager.update(key, movie);
    this.hideMovieEditForm();
  }

  showMovieEditForm(key, movie) {
    this.openModal();
    this.setState({
      movieInEdition: movie,
      keyInEdition: key
    });
  }

  hideMovieEditForm() {
    this.setState({
      movieInEdition: null,
      keyInEdition: null
    });
    this.closeModal();
  }

  render() {
    const movieEditForm = this.state.modalIsOpen ?
     <MovieForm movie={this.state.movieInEdition} k={this.state.keyInEdition} action={this.editMovie}/> : null;
    return (
     <div>
       <section className="Content">
         <header>
           <h2>Add your favourite movies</h2>
         </header>
         <MovieForm movie={null} className="MovieForm" action={this.addMovie}/>
       </section>
       <section className="Content">
         <header>
           <h2>Your favourite movies list</h2>
         </header>
         <MovieList className="MovieList" movies={this.state.movies} action={this.showMovieEditForm}/>
       </section>
       <Modal className="Modal" isOpen={this.state.modalIsOpen}>
         <header>
           <h2>Edit movie</h2>
         </header>
         {movieEditForm}
         <button className="Close-button" onClick={this.closeModal}>Close</button>
       </Modal>
     </div>
    );
  }
}
export default MoviesContainer;
