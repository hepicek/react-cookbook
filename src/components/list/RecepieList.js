import React, { Component } from 'react';
import RecepieListItem from './RecepieListItem';
import {CardGroup} from 'reactstrap';


class RecepieList extends Component {
  render() {

    const {data, openDetail} = this.props;

    return (
        <div>
        <CardGroup className="d-flex justify-content-around">
            {data.map((item, index) => {
                return (
                    <RecepieListItem 
                    key={index} 
                    openDetail={openDetail} 
                    recepie={item}
                    />
                )
            })}
        </CardGroup>
        </div>
    );
  }
}

export default RecepieList;
