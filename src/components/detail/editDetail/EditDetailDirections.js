import React, {Component} from 'react';
import {FormGroup, Input } from 'reactstrap';

class EditDetailDirections extends Component {

    onChangeDirectionsHandler = (event) => {
        const {updateData} = this.props.updateData;
        updateData('directions', event.target.value);
    };

    render() {

        const {directions} = this.props.data;

        return (
            <div>
                <h4>Directions</h4>
                <hr/>
                <FormGroup>
                    <Input onChange={this.onChangeDirectionsHandler} type="textarea" name="directions" rows={20} defaultValue={directions}/>
            </FormGroup>
            </div>
        );
    }
}

export default EditDetailDirections;
