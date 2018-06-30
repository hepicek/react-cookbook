import React, { Component } from 'react';
import Recepie from './Recepie';


class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: false,
            loading: true,
            error: false,
        }
    }
    componentDidMount = () => {

        const {detailSlug} = this.props;

        fetch(`https://cookbook.jakubricar.cz/api/recipes/${detailSlug}`)
        .then(response => response.json())
        .then(resData =>{
            this.setState({
                data: resData,
                loading: false,

            })
        })
        .catch(error => {
            console.log('error', error);
            this.setState({
                error: error,
                loading: false,
                
            })
        });
    };



  render() {

    const {onClickHandler} = this.props;
    const {data, error, loading} = this.state;
    return (
        <div>
        <button  
        onClick={onClickHandler}
        >Go to list</button>
        {loading && <div>Loading...</div>}
        {error &&<div>Some error occured</div>}
        {data && <Recepie data={data} />}
        </div>
    );
  }
}

export default Detail;
