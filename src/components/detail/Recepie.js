import React, {Component} from 'react';

import EditDetail from './editDetail/EditDetail';
import RecepieDetail from './RecepieDetail';
import RecepieHeader from "./RecepieHeader";
import {Modal, ModalHeader, Button, ModalFooter} from 'reactstrap';


class Recepie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            updatedData: props.data,
            modal: false
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

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

    deleteData = (url) => {
        return fetch(url, {
            headers: {
                'content-type': 'application/json'
            },
            method: 'DELETE',

        })
    };
    deleteUpdatedData = () => {
        const {data, redirectToListing} = this.props;
        const url = `https://cookbook.jakubricar.cz/api/recipes/${data._id}`;
        this.deleteData(url).then(resData => {
            redirectToListing();
            this.toggle();
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
                    deleteUpdatedData={this.toggle}
                />
                <hr/>
                {isEditing ? <EditDetail updateData={this.updateData} data={this.props.data}/> :
                    <RecepieDetail data={this.props.data}/>}
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Do you really want to delete?</ModalHeader>
                    <ModalFooter>
                        <Button color="danger" onClick={this.deleteUpdatedData}>Delete</Button>{' '}
                        <Button color="white" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default Recepie;
