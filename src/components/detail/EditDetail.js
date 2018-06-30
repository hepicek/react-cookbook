import React, { Component } from 'react';
class EditDetail extends Component {
    
    onChangeHandler = (event) => {
        const {updateData} = this.props;
        updateData('title', event.target.value);
    };


  render() {


    const {title, isEditing} = this.props;
    if (isEditing) {
        return <input 
        type="text" 
        defaultValue={title}
        onChange= {this.onChangeHandler}
        />
    }

    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
  }
}

export default EditDetail;
