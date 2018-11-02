/**
 * Created by Guido on 2/11/2018.
 */
import React, {Component, Fragment} from 'react';

class MovieComponent extends Component {

  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.props.action(this.props.k, this.props.movie);
  }

  render() {
    return (
     <React.Fragment>
       <td className="MovieTD">{this.props.movie.name}</td>
       <td>{this.props.movie.year}</td>
       <td>{this.props.movie.duration} minutes</td>
       <td className="ButtonTD">
         <button className="Edit-button" onClick={this.handleButtonClick}> Edit</button>
       </td>
     </React.Fragment>
    );
  }
}
export default MovieComponent;