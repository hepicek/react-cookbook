import React, {Component} from 'react';
import {Input, Col, Row} from 'reactstrap';
import EditDetailBasicInfo from "./EditDetailBasicInfo";
import EditDetailIngredients from "./EditDetailIngredients";
import EditDetailDirections from "./EditDetailDirections";
import DirectionPreview from "./ingredients/DirectionPreview";

class EditDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            directionsPreview: this.props.data.directions
        }
    }

    onChangeDirectionsHandler = (event) => {
        let directions = event.target.value;
        const {updateData} = this.props;
        updateData('directions', directions);
       this.setState(() => ({directionsPreview: directions}));

    };


    onChangeHandler = (event) => {
        const {updateData} = this.props;
        updateData('title', event.target.value);
    };


    render() {
        const {title} = this.props.data;
        return (
            <div>
                <Input
                    type="text"
                    defaultValue={title}
                    onChange={this.onChangeHandler}
                />
                <Row className="my-3">
                    <Col lg="2"><EditDetailBasicInfo updateData={this.props} data={this.props.data}/></Col>
                    <Col lg="4"><EditDetailIngredients updateData={this.props} data={this.props.data}/></Col>
                    <Col lg="6"><EditDetailDirections onChangeDirectionsHandler={this.onChangeDirectionsHandler} updateData={this.props} data={this.props.data}/></Col>
                </Row>
                <DirectionPreview data={this.state.directionsPreview}/>
            </div>
        );
    }
}

export default EditDetail;
