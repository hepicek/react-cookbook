import React, {Component} from 'react';
import {Card, CardHeader, CardBody, InputGroup, InputGroupAddon, Input, Row, Col, Button} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt, faListAlt} from '@fortawesome/free-regular-svg-icons';

class EditDetailIngredients extends Component {


    render() {

        const {ingredients} = this.props.data;

        return (
            <div>
                <h4>Ingredients</h4>
                <hr/>
                <div>
                    {
                        ingredients.map((item, index) => {
                            if (item.isGroup) {
                                return (
                                    <Row  className="border py-2 m-0 list-group-item-warning">
                                        <Col xs={12} className="p-0">
                                            {item.name}
                                        </Col>
                                    </Row>
                                )
                            }
                            return (

                                <Row key={index} className="border py-2 m-0">
                                    <Col xs={1} className="pl-1 text-primary ">
                                        <FontAwesomeIcon icon={faTrashAlt}/>
                                    </Col>
                                    <Col xs={3} className="p-0 font-weight-bold">
                                        {console.log(item)}
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
                <Card className="mt-2">
                    <CardHeader>Add ingredient</CardHeader>
                    <CardBody className="p-3">
                        <Row className="d-flex">
                            <Col>
                                <Input type="text" name="amount" id="amount" placeholder="Amount"/>
                            </Col>
                            <Col>
                                <Input type="text" name="unit" id="unit" placeholder="Unit"/>
                            </Col>
                        </Row>
                        <InputGroup className="mt-3">
                            <Input type="text" name="ingredient" id="ingredient" placeholder="Name"/>
                            <InputGroupAddon addonType="append">
                                <Button color="primary">Add</Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </CardBody>
                </Card>
                <InputGroup className="mt-3">
                    <Input type="text" name="ingredient" id="ingredient" placeholder="New Group"/>
                    <InputGroupAddon addonType="append">
                        <Button color="secondary">Add</Button>
                    </InputGroupAddon>
                </InputGroup>
            </div>
        );
    }
}

export default EditDetailIngredients;
