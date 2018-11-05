/**
 * Created by Guido on 4/11/2018.
 */
import React, {Component} from 'react';
import MovieForm from '../MovieForm/MovieForm';
import {connect} from 'react-redux'
import {addMovie} from '../../actions/actions';

class MovieFormContainer extends Component {

  render() {
    return (
     <section className="Content">
       <header>
         <h2>Add your favourite movies</h2>
       </header>
       <MovieForm movie={null} className="MovieForm" action={this.props.action}/>
     </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: (movie) => {
      dispatch(addMovie(movie))
    }
  }
};

export default connect(
 null,
 mapDispatchToProps,
)(MovieFormContainer)
