import React, { Component } from 'react';
import './Recepie.css';
class Directions extends Component {
    


  render() {

    const {data} = this.props;
    return (
        <div>{data}</div>
    );
  }
}

export default Directions;
