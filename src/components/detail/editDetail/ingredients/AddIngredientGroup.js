import React, {Component} from 'react';
import {InputGroup, InputGroupAddon, Input, Button} from 'reactstrap';

class AddIngredientGroup extends Component {
    render() {
        return (
            <form onSubmit={this.props.addIngredientGroup}>
                <InputGroup className="mt-3">
                    <Input type="text" name="group" id="group" placeholder="New Group"/>
                    <InputGroupAddon addonType="append">
                        <Button color="secondary">Add</Button>
                    </InputGroupAddon>
                </InputGroup>
            </form>
        );
    }
}


export default AddIngredientGroup;
