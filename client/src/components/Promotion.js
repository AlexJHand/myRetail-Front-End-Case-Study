import React from 'react';

const Promotion = (props) => 
    <div className="promotion">
        <i className="fas fa-tag promotionsIcon"></i>
        <span className="promotionsText">{props.description.toLowerCase()}</span>
    </div>

export default Promotion;