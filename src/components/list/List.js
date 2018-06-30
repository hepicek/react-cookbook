import React, {Component} from 'react';
import RecepieList from './RecepieList';
import {Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: false,
            loading: true,
            error: false,
        }
    }

    componentDidMount = () => {
        fetch('https://cookbook.jakubricar.cz/api/recipes/')
            .then(response => response.json())
            .then(resData => {
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
        const {redirectToDetail} = this.props;
        const {data, error, loading} = this.state;
        return (
            <div className="container">
                <div className="d-flex justify-content-between  align-items-center my-3">
                    <h1 className="m-0">Recipes</h1>
                    <Button color="primary"><FontAwesomeIcon className="mr-2" icon={faPlusSquare} />New recipe</Button>
                </div>
                <hr/>
                {loading && <div>Loading...</div>}
                {error && <div>Some error occured</div>}
                {data && <RecepieList openDetail={redirectToDetail} data={data}/>}
            </div>
        );
    }
}

export default List;
