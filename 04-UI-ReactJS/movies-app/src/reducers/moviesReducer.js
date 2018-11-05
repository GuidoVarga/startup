/**
 * Created by Guido on 4/11/2018.
 */
import {ADD_MOVIE, EDIT_MOVIE, DELETE_MOVIE} from '../actions/actions';

const initialState = {
  movies: []
};

function moviesActions(state = initialState, action) {

  switch (action.type) {
    case ADD_MOVIE:
      return Object.assign({}, state, {movies: [...state.movies, action.movie]});
    case EDIT_MOVIE:
      return Object.assign({}, state, {
        movies: state.movies
         .slice(0, action.index)
         .concat(action.movie)
         .concat(state.movies.slice(action.index + 1))
      });
    case DELETE_MOVIE:
      return Object.assign({}, state, {
        movies: state.movies
         .slice(0, action.index)
         .concat(state.movies.slice(action.index + 1))
      });
    default:
      return state;
  }
}

export default moviesActions;