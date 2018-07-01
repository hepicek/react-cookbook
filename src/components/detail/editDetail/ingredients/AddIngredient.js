import React, {Component} from 'react';
import {Card, CardHeader, CardBody, InputGroup, InputGroupAddon, Input, Row, Col, Button} from 'reactstrap';

class AddIngredient extends Component {

    render() {
        return (
            <form onSubmit={this.props.addIngredientHandler}>
                <Card className="mt-2">
                    <CardHeader>Add ingredient</CardHeader>
                    <CardBody className="p-3">
                        <Row className="d-flex">
                            <Col>
                                <Input type="number" name="amount" id="amount"
                                       placeholder="Amount"/>
                            </Col>
                            <Col>
                                <Input type="text" name="unit" id="unit" placeholder="Unit"/>
                            </Col>
                        </Row>
                        <InputGroup className="mt-3">
                            <Input type="text" name="ingredient" id="ingredient"
                                   placeholder="Name"/>
                            <InputGroupAddon addonType="append">
                                <Button color="primary">Add</Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </CardBody>
                </Card>
            </form>
        );
    }
}

export default AddIngredient;
