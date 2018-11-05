/**
 * Created by Guido on 4/11/2018.
 */
export const ADD_MOVIE = 'ADD_MOVIE';
export const EDIT_MOVIE = 'EDIT_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';


export function addMovie(movie) {
  return {
    type: ADD_MOVIE,
    movie
  }
}

export function editMovie(index, movie) {
  return {
    type: EDIT_MOVIE,
    index,
    movie
  }
}

export function deleteMovie(index) {
  return {
    type: DELETE_MOVIE,
    index
  }
}