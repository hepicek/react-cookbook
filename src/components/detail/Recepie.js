import React, { Component } from 'react';
import Ingredients from './Ingredients';
import Directions from './Directions';
import EditDetail from './EditDetail';
import './Recepie.css';
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
    const {_id} = this.props.data;
    const url = `https://cookbook.jakubricar.cz/api/recipes/${_id}`
    this.postData(url, this.state.updatedData).then(resData => {
    });
};

updateData = (field, value) => {
    const {updatedData} = this.state;
    this.setState({
        updatedData: {...updatedData,
        [field]: value,
    },
    });
};

  render() {

    const {title, 
        preparationTime, 
        ingredients, 
        servingCount, 
        directions,
    } = this.props.data;

    const {isEditing} = this.state;

    return (
        <div className="recepieContainer">
           <div className="RecepieHeader">
                <EditDetail 
                title={title} 
                updateData={this.updateData}
                isEditing={isEditing}/>
                <div>
                    <button onClick={this.toggleEdit}>Edit</button>
                    <button onClick={this.sentUpdatedData}>Save changes</button>
                    <button>Delete</button>
                </div>
           </div>
           {preparationTime && <div>{preparationTime}</div>}
            <div className="RecepieBody">
                <div>
                    <h3>Ingredients</h3>
                    <div>Serves:{servingCount}</div>
                    <Ingredients data={ingredients} />
                </div>
                <div>
                    <h3>Directions</h3>
                    <Directions data={directions}/>
                </div>
            </div>
        </div>
    );
  }
}

export default Recepie;
