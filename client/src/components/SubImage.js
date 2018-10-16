import React from 'react';

const SubImage = (props) => 
    <img className="subImage" src={props.image} alt={props.title} onClick={props.onClick}/>

export default SubImage;