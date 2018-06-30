import React, {Component} from 'react';
import Ingredients from './Ingredients';
import Directions from './Directions';
import {Row, Col} from 'reactstrap';
import {faClock} from "@fortawesome/free-regular-svg-icons/index";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";

class RecepieDetail extends Component {

    render() {
        const {
            preparationTime,
            ingredients,
            servingCount,
            directions,
        } = this.props.data;

        return (
            <div className="d-flex flex-column">
                {preparationTime && <div><FontAwesomeIcon icon={faClock} className="mr-2"/>{preparationTime} min</div>}
                <Row className="">
                    <Col md={4} sm={12}>
                        <h3>Ingredients</h3>
                        {servingCount && <div>Serves:{servingCount}</div>}
                        <Ingredients data={ingredients}/>
                    </Col>
                    <Col md={8} sm={12}>
                        <h3>Directions</h3>
                        <Directions data={directions}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default RecepieDetail;
