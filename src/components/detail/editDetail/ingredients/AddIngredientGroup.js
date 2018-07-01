import React, {Component} from 'react';
import {InputGroup, InputGroupAddon, Input, Button} from 'reactstrap';

class AddIngredientGroup extends Component {
    render() {
        return (
            <InputGroup className="mt-3">
                <Input onChange={this.props.addGroup} type="text" name="ingredient" id="ingredient" placeholder="New Group"/>
                <InputGroupAddon addonType="append">
                    <Button onClick={this.props.addIngredientGroup} color="secondary">Add</Button>
                </InputGroupAddon>
            </InputGroup>
        );
    }
}


export default AddIngredientGroup;
