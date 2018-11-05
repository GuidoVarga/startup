/**
 * Created by Guido on 31/10/2018.
 */
import React, {Component} from 'react';
import LocalStorageManager from '../../localStorageManager';
import MovieForm from '../MovieForm/MovieForm';
import MovieList from '../MovieList/MovieList';
import Modal from 'react-modal';
import {connect} from 'react-redux'
import {deleteMovie, editMovie} from '../../actions/actions';

class MoviesContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      movieInEdition: {},
      keyInEdition: null,
      modalIsOpen: false
    };

    this.showMovieEditForm = this.showMovieEditForm.bind(this);
    this.loadMovies = this.loadMovies.bind(this);
    this.hideMovieEditForm = this.hideMovieEditForm.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    Modal.setAppElement('#root');
  }

  openModal() {
    this.setState({modalIsOpen: true});
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
     <MovieForm movie={this.state.movieInEdition} k={this.state.keyInEdition} closeModal={this.closeModal}
                action={this.props.onEdit}/> : null;
    return (
     <React.Fragment>
       <section className="Content">
         <header>
           <h2>Your favourite movies list</h2>
         </header>
         <MovieList className="MovieList" movies={this.props.movies} onEditClicked={this.showMovieEditForm}
                    onDeleteClicked={this.props.onDelete}/>
       </section>
       <Modal className="Modal" isOpen={this.state.modalIsOpen}>
         <header>
           <h2>Edit movie</h2>
         </header>
         {movieEditForm}
         <button className="Close-button" onClick={this.closeModal}>Close</button>
       </Modal>
     </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (index) => {
      dispatch(deleteMovie(index))
    },
    onEdit: (index, movie) => {
      dispatch(editMovie(index, movie))
    }
  }
};

export default connect(
 mapStateToProps,
 mapDispatchToProps
)(MoviesContainer)
