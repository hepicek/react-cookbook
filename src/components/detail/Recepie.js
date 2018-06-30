import React, {Component} from 'react';

import EditDetail from './editDetail/EditDetail';
import RecepieDetail from './RecepieDetail';
import RecepieHeader from "./RecepieHeader";

class Recepie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            updatedData: props.data
        }
    }

    toggleEdit = () => {
        this.setState({
            isEditing: !this.state.isEditing
        });
    };

    postData = (url, data) => {
        return fetch(url, {
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',

        })
            .then(response => response.json())
    };

    sentUpdatedData = () => {
        const {data, redirectToListing} = this.props;
        const url = `https://cookbook.jakubricar.cz/api/recipes/${data._id}`;
        this.postData(url, this.state.updatedData).then(resData => {
            redirectToListing();
        });
    };

    updateData = (field, value) => {
        const {updatedData} = this.state;
        this.setState({
            updatedData: {
                ...updatedData,
                [field]: value,
            },
        });
    };

    render() {

        const {
            title,
        } = this.props.data;

        const {isEditing} = this.state;

        return (
            <div className="container">
                <RecepieHeader
                    title={title}
                    updateData={this.updateData}
                    isEditing={isEditing}
                    toggleEdit={this.toggleEdit}
                    sentUpdatedData={this.sentUpdatedData}
                />
                <hr/>
                {isEditing ? <EditDetail updateData={this.updateData} data={this.props.data}/> :
                    <RecepieDetail data={this.props.data}/>}

            </div>
        );
    }
}

export default Recepie;
