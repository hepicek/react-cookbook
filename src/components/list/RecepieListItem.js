import React, { Component } from 'react';
import {Button, Card, CardTitle,CardBody, CardText} from 'reactstrap';

class RecepieListItem extends Component {
  render() {

    const {recepie, openDetail} = this.props;

    return (
      <div style={{width: '33%'}}>
        <Card>
        <CardTitle>{recepie.title}</CardTitle>
        <CardBody>
          <CardText>Preperation time: {recepie.preparationTime}</CardText>
          <Button className="primary"
          onClick={()=>{openDetail(recepie.slug)}}
          >Detail
          </Button>
        </CardBody>
      </Card>
      </div>
            )
  }
}

export default RecepieListItem;
