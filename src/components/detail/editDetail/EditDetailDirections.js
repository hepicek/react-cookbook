import React, {Component} from 'react';
import {FormGroup, Input } from 'reactstrap';

class EditDetailDirections extends Component {




    render() {

        const {directions} = this.props.data;

        return (
            <div>
                <h4>Directions</h4>
                <hr/>
                <FormGroup>
                    <Input type="textarea" name="directions" rows={20} value={directions}/>
            </FormGroup>
            </div>
        );
    }
}

export default EditDetailDirections;
