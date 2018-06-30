import React, { Component } from 'react';
import {Card, CardTitle,CardBody, CardText, Col} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import './RecepieListItem.css';

class RecepieListItem extends Component {
  render() {

    const {recepie, openDetail} = this.props;

    return (
      <Col md="6" lg="4" className="my-2">
        <Card className="cardRecipe" onClick={()=>{openDetail(recepie.slug)}}>
        <CardTitle className="text-primary font-weight-bold m-3">{recepie.title}</CardTitle>
        <CardBody>
          <CardText><FontAwesomeIcon icon={faClock}/> {recepie.preparationTime} min</CardText>
        </CardBody>
      </Card>
      </Col>
            )
  }
}

export default RecepieListItem;
