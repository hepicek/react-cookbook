import React, {Component} from 'react';
import {faListAlt, faTrashAlt} from "@fortawesome/free-regular-svg-icons/index";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import {Row, Col} from 'reactstrap';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import {
    DragSource,
    DropTarget,
} from 'react-dnd';
import flow from 'lodash/flow';

const ingredientSource = {
    beginDrag(props) {
        return {
            id: props.id,
            index: props.index,
        }
    },
};

const IngredientTarget = {
    hover(props, monitor, component) {
        const dragIndex = monitor.getItem().index;
        const hoverIndex = props.index;

        if (dragIndex === hoverIndex) {
            return;
        }
        const hoverBoundingRect = (findDOMNode(
            component,
        )).getBoundingClientRect();
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        const clientOffset = monitor.getClientOffset();
        const hoverClientY = (clientOffset).y - hoverBoundingRect.top;

        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
        }

        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
        }

        props.moveIngredient(dragIndex, hoverIndex);
        monitor.getItem().index = hoverIndex;
    },
};


class Ingredient extends Component {
    static propTypes = {
        connectDragSource: PropTypes.func.isRequired,
        connectDropTarget: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired,
        isDragging: PropTypes.bool.isRequired,
        id: PropTypes.any.isRequired,
        moveIngredient: PropTypes.func.isRequired,
    };

    render() {

        const {ingredient} = this.props;
        const {
            isDragging,
            connectDragSource,
            connectDropTarget,
        } = this.props;
        const opacity = isDragging ? 0 : 1;

        return connectDragSource &&
            connectDropTarget &&
            connectDragSource(
                connectDropTarget(
                    <div style={{opacity}}>
                        <Row className="border py-2 m-0">
                            <Col xs={1} className="px-1 text-primary ">
                                <div onClick={() => this.props.deleteIngredientHandler(ingredient.name)}>
                                    <FontAwesomeIcon
                                        icon={faTrashAlt}/></div>
                            </Col>
                            <Col xs={3} className="p-0 font-weight-bold">
                                {ingredient.amount} {ingredient.amountUnit}
                            </Col>
                            <Col xs={7} className="p-0">
                                {ingredient.name}
                            </Col>
                            <Col xs={1} className="p-0">
                                <FontAwesomeIcon icon={faListAlt}/>
                            </Col>
                        </Row>
                    </div>)
            )
    }
}

export default flow(
    DragSource(
        'ingredients',
        ingredientSource,
        (connect, monitor) => ({
            connectDragSource: connect.dragSource(),
            isDragging: monitor.isDragging(),
        }),
    ),
    DropTarget('ingredients', IngredientTarget, (connect) => ({
        connectDropTarget: connect.dropTarget(),
    }))
)(Ingredient);