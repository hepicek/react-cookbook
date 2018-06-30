import React, {Component} from 'react';
import { InputGroup, InputGroupText, InputGroupAddon, Input, FormGroup, Label } from 'reactstrap';

class EditDetailBasicInfo extends Component {

    render() {

        const {preparationTime} = this.props.data;

        return (
            <div>
                <h4>Basic Info</h4>
                <hr/>
                <FormGroup>
                    <Label for="preparation">Preparation Time</Label>
                    <InputGroup>
                        <Input type="number" name="preparation" value={preparationTime} id="preparation"/>
                        <InputGroupAddon addonType="append">
                            <InputGroupText>min</InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <Label for="servings">Servings</Label>
                    <Input type="text" name="servings" id="servings"/>
                </FormGroup>
                <FormGroup>
                    <Label for="sideDish">Side dish</Label>
                    <Input type="text" name="sideDish" id="sideDish"/>
                </FormGroup>


            </div>
        );
    }
}

export default EditDetailBasicInfo;
