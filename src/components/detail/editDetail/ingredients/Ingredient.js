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

        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
            return;
        }

        // Determine rectangle on screen
        const hoverBoundingRect = (findDOMNode(
            component,
        )).getBoundingClientRect();

        // Get vertical middle
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

        // Determine mouse position
        const clientOffset = monitor.getClientOffset();

        // Get pixels to the top
        const hoverClientY = (clientOffset).y - hoverBoundingRect.top;

        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%
        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
        }

        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
        }

        // Time to actually perform the action
        props.moveIngredient(dragIndex, hoverIndex);

        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
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
        return connectDragSource &&
            connectDropTarget &&
            connectDragSource(
                connectDropTarget(
                    <div>
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