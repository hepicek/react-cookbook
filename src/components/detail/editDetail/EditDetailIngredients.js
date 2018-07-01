import React, {Component} from 'react';
import AddIngredient from "./ingredients/AddIngredient";
import Ingredients from "./ingredients/Ingredients";
import AddIngredientGroup from "./ingredients/AddIngredientGroup";

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

    addAmount = (e) => {
        let amount = e.target.value;
        const newAmount = {...this.state.ingredients, amount: amount};
        this.setState({ingredients: newAmount});
    };
    addUnit = (e) => {
        let unit = e.target.value;
        const newUnit = {...this.state.ingredients, amountUnit: unit};
        this.setState({ingredients: newUnit});
    };
    addIngredient = (e) => {
        let ingredient = e.target.value;
        const newIngredient = {...this.state.ingredients, name: ingredient};
        this.setState({ingredients: newIngredient});
    };
    addGroup = (e) => {
        let newGroup = e.target.value;
        const newGroupName = {...this.state.group, name: newGroup};
        this.setState({group: newGroupName});

    };
    addIngredientGroup = () => {
        const {updateData} = this.props.updateData;
        const {group} =this.state;
        const updatedIngredients = this.props.data.ingredients.concat(group);
        this.setState((prevState) => ({currentIngr: prevState.currentIngr.concat(group)}));
        updateData('ingredients', updatedIngredients)
    };
    addIngredientHandler = () => {
        const {updateData} = this.props.updateData;
        const {ingredients} = this.state;
        const updatedIngredients = this.props.data.ingredients.concat(ingredients);
        this.setState((prevState) => ({currentIngr: prevState.currentIngr.concat(ingredients)}));
        updateData('ingredients', updatedIngredients);
    };
    deleteIngredientHandler = (ingredientToRemove) => {
        const {updateData} = this.props.updateData;
        this.setState((prevState) => ({
            currentIngr: prevState.currentIngr.filter((ingredient) => ingredientToRemove !== ingredient.name)
        }), () => {updateData('ingredients', this.state.currentIngr)}
    );

    };

    render() {

        const {currentIngr} = this.state;
        return (
            <div>
                <h4>Ingredients</h4>
                <hr/>
                <Ingredients deleteIngredientHandler={this.deleteIngredientHandler} ingredients={currentIngr}/>
                <AddIngredient
                    addAmount={this.addAmount}
                    addUnit={this.addUnit}
                    addIngredient={this.addIngredient}
                    addIngredientHandler={this.addIngredientHandler}
                />
                <AddIngredientGroup addGroup={this.addGroup} addIngredientGroup={this.addIngredientGroup} updateData={this.props.updateData}/>
            </div>
        );
    }
}

export default EditDetailIngredients;
