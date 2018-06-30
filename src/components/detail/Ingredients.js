import React, { Component } from 'react';
import './Recepie.css';
class Ingredients extends Component {
    


  render() {

    const {data} = this.props;
    return (
        <div>
        <table>
            <thead>
            <tr>
                <th>Amount</th>
                <th>Ingedients</th>
            </tr>
            </thead>
            <tbody>
                {data.map((item, index) => {
                    if (item.isGroup) {
                        return (
                            <tr key={index}>
                        <td>{item.name}</td>
                    </tr>
                    )
                    }
                    return(
                        <tr key={index}>
                        <td>{`${item.amount || ''} ${item.amountUnit || ''}`}</td>
                        <td>{item.name}</td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    );
  }
}

export default Ingredients;
