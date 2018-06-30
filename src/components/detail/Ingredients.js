import React, {Component} from 'react';
import {Table} from 'reactstrap';

class Ingredients extends Component {

    render() {

        const {data} = this.props;
        return (
            <div>
                <Table bordered>
                    <tbody>
                    {data.map((item, index) => {
                        if (item.isGroup) {
                            return (
                                <tr key={index} className="list-group-item-warning">
                                    <td colspan="2" className="list-group-item-warning p-2">{item.name}</td>

                                </tr>
                            )
                        }
                        return (
                            <tr key={index}>
                                <td className="font-weight-bold p-1">{`${item.amount || ''} ${item.amountUnit || ''}`}</td>
                                <td className="p-1">{item.name}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Ingredients;