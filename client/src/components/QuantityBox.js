import React from 'react';

const QuantityBox = (props) =>
    <div className="quantityBox">
        <p className="quantityText">quantity: </p>
        <div className="quantityCounter">
            <i className="fas fa-minus-circle" onClick={() => props.onClick("down")}/>
            <p className="quantityNumber"> {props.quantity} </p>
            <i className="upButton fas fa-plus-circle" onClick={() => props.onClick("up")}/>
        </div>
    </div>

export default QuantityBox;