import React, {Component} from 'react';
import {faListAlt, faTrashAlt} from "@fortawesome/free-regular-svg-icons/index";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import {Row, Col} from 'reactstrap';

class Ingredients extends Component {
    render() {
        const {ingredients} = this.props;
        return (
            <div>
                {
                    ingredients.map((item, index) => {
                        if (item.isGroup) {
                            return (
                                <Row key={index} className="border py-2 m-0 list-group-item-warning">
                                    <Col xs={1} className="px-1 text-primary ">
                                        <div onClick={() => this.props.deleteIngredientHandler(item.name)}><FontAwesomeIcon icon={faTrashAlt}/></div>
                                    </Col>
                                    <Col xs={12} className="p-0">
                                        {item.name}
                                    </Col>
                                    <Col xs={1} className="p-0">
                                        <FontAwesomeIcon icon={faListAlt}/>
                                    </Col>
                                </Row>
                            )
                        }
                        return (

                            <Row key={index} className="border py-2 m-0">
                                <Col xs={1} className="px-1 text-primary ">
                                    <div onClick={() => this.props.deleteIngredientHandler(item.name)}><FontAwesomeIcon icon={faTrashAlt}/></div>
                                </Col>
                                <Col xs={3} className="p-0 font-weight-bold">
                                    {item.amount} {item.amountUnit}
                                </Col>
                                <Col xs={7} className="p-0">
                                    {item.name}
                                </Col>
                                <Col xs={1} className="p-0">
                                    <FontAwesomeIcon icon={faListAlt}/>
                                </Col>
                            </Row>
                        )
                    })
                }
            </div>
        );
    }
}


export default Ingredients;