/**
 * Created by Guido on 30/10/2018.
 */
import React, {Component} from 'react';
import './MovieForm.css';
import Movie from '../../model/movie.js';

class MovieForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movieName: '',
      movieYear: '',
      movieDuration: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.movie) {
      this.setState({
        movieName: this.props.movie.name,
        movieYear: this.props.movie.year,
        movieDuration: this.props.movie.duration
      });
    }
  }

  handleInputChange = (event) => {

    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const key = this.props.k;
    const movie = new Movie(this.state.movieName, this.state.movieYear, this.state.movieDuration);
    if (movie.name !== '') {
      if (key >= 0) {
        this.props.action(key, movie);
        this.props.closeModal();
      }
      else {
        this.props.action(movie);
      }
    } else {
      alert('Complete the movie title');
    }
  };

  render() {
    return (

     <form className="MovieForm" onSubmit={this.handleSubmit}>
       <label>
         Name:
         <input
          className="input-name"
          name="movieName"
          value={this.state.movieName}
          type="text"
          onChange={this.handleInputChange}/>
       </label>
       <br />
       <label>
         Year:
         <input
          className="input-year"
          name="movieYear"
          value={this.state.movieYear}
          type="number"
          min="1888"
          max="2018"
          onChange={this.handleInputChange}/>
       </label>
       <br />
       <label>
         Duration:
         <input
          className="input-duration"
          name="movieDuration"
          value={this.state.movieDuration}
          type="number"
          onChange={this.handleInputChange}/>
       </label>
       <br />
       <input type="submit" className="Submit-button" value="Submit"/>
     </form>
    );
  }

}
export default MovieForm;