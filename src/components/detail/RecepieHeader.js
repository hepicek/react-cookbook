import React, {Component} from 'react';
import { Button } from 'reactstrap';

class RecepieHeader extends Component {

    render() {
        const {title, isEditing} = this.props;
        return (
            <div className="my-3 d-flex justify-content-between">
                <h2 className="m-0">{title}</h2>
                <div>
                    {!isEditing && <Button color="primary" className="mx-2" onClick={this.props.toggleEdit}>Edit</Button>}
                    {isEditing && <Button color="success" onClick={this.props.sentUpdatedData}>Save changes</Button>}
                    {!isEditing && <Button onClick={this.props.deleteUpdatedData} color="danger">Delete</Button>}
                </div>
            </div>
        );
    }
}

export default RecepieHeader;
