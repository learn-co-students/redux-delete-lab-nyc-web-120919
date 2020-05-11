import React, { Component } from 'react';

class Band extends Component {

  handleClick = () => {
    const {deleteBand, id} = this.props
    deleteBand(id)
  }

  render() {
    console.log(this.props)
    return(
        <li>
          {this.props.name}<button onClick={this.handleClick}>Delete</button>
        </li>
    );
  }
};

export default Band;
