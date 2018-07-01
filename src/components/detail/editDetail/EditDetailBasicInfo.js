import React, {Component} from 'react';
import { InputGroup, InputGroupText, InputGroupAddon, Input, FormGroup, Label } from 'reactstrap';

class EditDetailBasicInfo extends Component {
    onChangeTimeHandler = (event) => {
        const {updateData} = this.props.updateData;
        updateData('preparationTime', event.target.value);
    };
    onChangeServingsHandler = (event) => {
        const {updateData} = this.props.updateData;
        updateData('servingCount', event.target.value);
    };
    onChangeSideDishHandler = (event) => {
        const {updateData} = this.props.updateData;
        updateData('sideDish', event.target.value);
    };
    render() {
        const {preparationTime, servingCount, sideDish} = this.props.data;

        return (
            <div>
                <h4>Basic Info</h4>
                <hr/>
                <FormGroup>
                    <Label for="preparation">Preparation Time</Label>
                    <InputGroup>
                        <Input onChange={this.onChangeTimeHandler} type="number" name="preparation" defaultValue={preparationTime} id="preparation"/>
                        <InputGroupAddon addonType="append">
                            <InputGroupText>min</InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <Label for="servings">Servings</Label>
                    <Input onChange={this.onChangeServingsHandler} type="text" name="servings" defaultValue={servingCount} id="servings"/>
                </FormGroup>
                <FormGroup>
                    <Label for="sideDish">Side dish</Label>
                    <Input onChange={this.onChangeSideDishHandler} type="text" name="sideDish" defaultValue={sideDish} id="sideDish"/>
                </FormGroup>
            </div>
        );
    }
}

export default EditDetailBasicInfo;
