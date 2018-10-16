import React from 'react';

import SubImage from './SubImage';

const ImageCarousel = (props) => 
    <div className="imageCarousel">
        <div className="carouselItem">
            <div className="carouselDirection" onClick={props.onClickLeft}>&#x3008;</div>
        </div>
        <div className="carouselItem">
            <SubImage image={props.subImage1} title={props.title} onClick={props.onClickLeft} />
        </div>
        <div className="carouselItem">
            <SubImage image={props.subImage2} title={props.title} />
        </div>
        <div className="carouselItem">
            <SubImage image={props.subImage3} title={props.title} onClick={props.onClickRight} />
        </div>
        <div className="carouselItem">
            <div className="carouselDirection" onClick={props.onClickRight}>&#x3009;</div>
        </div>
        
    </div>

export default ImageCarousel;