import React, {Component} from 'react';
import {Input, Col, Row} from 'reactstrap';
import EditDetailBasicInfo from "./EditDetailBasicInfo";
import EditDetailIngredients from "./EditDetailIngredients";
import EditDetailDirections from "./EditDetailDirections";

class EditDetail extends Component {

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
                    <Col lg="2"><EditDetailBasicInfo data={this.props.data}/></Col>
                    <Col lg="4"><EditDetailIngredients data={this.props.data}/></Col>
                    <Col lg="6"><EditDetailDirections data={this.props.data}/></Col>
                </Row>
            </div>
        );
    }
}

export default EditDetail;
