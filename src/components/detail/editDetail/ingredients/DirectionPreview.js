import React from 'react';

const DirectionPreview = (props) => {
    return (
        <div>
            <h4>Directions preview</h4>
            <hr/>
            {props.data}
        </div>
    );
};

export default DirectionPreview;
