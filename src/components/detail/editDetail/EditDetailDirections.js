import React, {Component} from 'react';
import {FormGroup, Input} from 'reactstrap';

class EditDetailDirections extends Component {

    render() {

        const {directions} = this.props.data;
        return (
            <div >
                <h4>Directions</h4>
                <hr/>
                <FormGroup className="mb-1">
                    <Input onChange={this.props.onChangeDirectionsHandler} type="textarea" name="directions" rows={20}
                           defaultValue={directions}/>
                </FormGroup>
                <p className="text-right"><strong>*bold*</strong> <em>_italic_</em> *) list</p>

            </div>
        );
    }
}

export default EditDetailDirections;
