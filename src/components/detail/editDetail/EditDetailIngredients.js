import React, {Component} from 'react';
import AddIngredient from "./ingredients/AddIngredient";
import Ingredient from "./ingredients/Ingredient";
import AddIngredientGroup from "./ingredients/AddIngredientGroup";
import update from 'immutability-helper';

class EditDetailIngredients extends Component {
    constructor(props) {
        super(props);
        const {ingredients} = this.props.data;
        this.state = {
            ingredients: {
                amount: '',
                amountUnit: '',
                name: ''
            },
            currentIngr : ingredients,
            group: {
                isGroup: true,
                name: ''
            }
        }
    }

    addIngredientGroup = (e) => {
        e.preventDefault();
        const {updateData} = this.props.updateData;
        const groupName = e.target.elements.group.value.trim();
        const newGroupName = {...this.state.group, name: groupName};
        this.setState(
            (prevState) => ({currentIngr: prevState.currentIngr.concat(newGroupName)}),
            () => {updateData('ingredients', this.state.currentIngr)}
        );
        if (newGroupName.name) {
            e.target.elements.group.value = '';
        }
    };
    addIngredientHandler = (e) => {
        e.preventDefault();
        const amount = e.target.elements.amount.value.trim();
        const amountUnit = e.target.elements.unit.value.trim();
        const ingredient = e.target.elements.ingredient.value.trim();
        const newIngredient = {...this.state.ingredients,amount: amount, amountUnit: amountUnit, name: ingredient};

        const {updateData} = this.props.updateData;
        this.setState(
            (prevState) => ({currentIngr: prevState.currentIngr.concat(newIngredient)}),
            () => {updateData('ingredients', this.state.currentIngr)}
        );
        if (newIngredient.name || newIngredient.amount || newIngredient.amountUnit) {
            e.target.elements.amount.value = '';
            e.target.elements.unit.value = '';
            e.target.elements.ingredient.value = '';
        }
    };
    deleteIngredientHandler = (ingredientToRemove) => {
        const {updateData} = this.props.updateData;
        this.setState(
            (prevState) => ({currentIngr: prevState.currentIngr.filter((ingredient) => ingredientToRemove !== ingredient.name)
        }), () => {updateData('ingredients', this.state.currentIngr)}
    );

    };
    moveIngredient = (dragIndex, hoverIndex) => {
        const { currentIngr } = this.state;
        const dragIngr = currentIngr[dragIndex];
        this.setState(
            update(this.state, {
                currentIngr: {
                    $splice: [[dragIndex, 1], [hoverIndex, 0, dragIngr]],
                },
            }),
        );
    };
    render() {
        const {currentIngr} = this.state;
        return (
            <div>
                <h4>Ingredients</h4>
                <hr/>
                {
                    currentIngr.map((item, index) => {
                        if (item.isGroup) {
                            return (
                                <Ingredient key={index} index={index} id={item._id} moveIngredient={this.moveIngredient} deleteIngredientHandler={this.deleteIngredientHandler} ingredient={item}/>
                            )
                        }
                        return (
                            <Ingredient key={item._id} index={index} id={item._id} moveIngredient={this.moveIngredient} deleteIngredientHandler={this.deleteIngredientHandler} ingredient={item}/>
                        )
                    })
                }
                <AddIngredient
                    addIngredientHandler={this.addIngredientHandler}
                />
                <AddIngredientGroup addIngredientGroup={this.addIngredientGroup} updateData={this.props.updateData}/>
            </div>
        );
    }
}

export default EditDetailIngredients;
