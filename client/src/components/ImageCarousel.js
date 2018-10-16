import React from 'react';

import SubImage from './SubImage';

const ImageCarousel = (props) => 
    <div className="imageCarousel">
        <div onClick={props.onClickLeft}>&#x3008;</div>
        <SubImage image={props.subImage1} title={props.title} onClick={props.onClickLeft} />
        <SubImage image={props.subImage2} title={props.title} />
        <SubImage image={props.subImage3} title={props.title} onClick={props.onClickRight} />
        <div onClick={props.onClickRight}>&#x3009;</div>
    </div>

export default ImageCarousel;