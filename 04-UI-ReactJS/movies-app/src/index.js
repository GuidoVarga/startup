import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import moviesActions from './reducers/moviesReducer';
import {addMovie} from './actions/actions';
import {Provider} from 'react-redux';
import Movie from './model/movie';

const store = createStore(moviesActions);

const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(addMovie(new Movie('Memento', 2000, 113)));
store.dispatch(addMovie(new Movie('Fight Club', 1999, 157)));
store.dispatch(addMovie(new Movie('Back to the Future Part III', 1990, 118)));
unsubscribe();


ReactDOM.render(
 <Provider store={store}>
   <App/>
 </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
