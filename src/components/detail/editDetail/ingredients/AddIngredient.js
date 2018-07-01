import React, {Component} from 'react';
import {Card, CardHeader, CardBody, InputGroup, InputGroupAddon, Input, Row, Col, Button} from 'reactstrap';

class AddIngredient extends Component {

    render() {
        return (
            <Card className="mt-2">
                <CardHeader>Add ingredient</CardHeader>
                <CardBody className="p-3">
                    <Row className="d-flex">
                        <Col>
                            <Input onChange={this.props.addAmount} type="number" name="amount" id="amount"
                                   placeholder="Amount"/>
                        </Col>
                        <Col>
                            <Input onChange={this.props.addUnit} type="text" name="unit" id="unit" placeholder="Unit"/>
                        </Col>
                    </Row>
                    <InputGroup className="mt-3">
                        <Input onChange={this.props.addIngredient} type="text" name="ingredient" id="ingredient"
                               placeholder="Name"/>
                        <InputGroupAddon addonType="append">
                            <Button onClick={this.props.addIngredientHandler} color="primary">Add</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </CardBody>
            </Card>
        );
    }
}

export default AddIngredient;
