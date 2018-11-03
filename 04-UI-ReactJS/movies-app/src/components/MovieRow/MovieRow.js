/**
 * Created by Guido on 2/11/2018.
 */
import React, {Component} from 'react';

class MovieComponent extends Component {

  constructor(props) {
    super(props);
    this.handleEditButtonClick = this.handleEditButtonClick.bind(this);
    this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
  }

  handleEditButtonClick() {
    this.props.onEditClicked(this.props.k, this.props.movie);
  }

  handleDeleteButtonClick() {
    this.props.onDeleteClicked(this.props.k);
  }

  render() {
    return (
     <React.Fragment>
       <td className="MovieTD">{this.props.movie.name}</td>
       <td>{this.props.movie.year}</td>
       <td>{this.props.movie.duration} minutes</td>
       <td className="ButtonTD">
         <button className="Edit-button" onClick={this.handleEditButtonClick}> Edit</button>
       </td>
       <td className="ButtonTD">
         <button className="Delete-button" onClick={this.handleDeleteButtonClick}> Delete</button>
       </td>
     </React.Fragment>
    );
  }
}
export default MovieComponent;