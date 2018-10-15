import React from 'react';

const ReviewsHeader = (props) => 
    <div className="reviewsHeader">
        <div className="reviewsOverallScore">
            <span className="reviewsOverallStars"></span>
            <span className="reviewsOverallText">overall</span>
        </div>
        <div className="reviewsTotal">
            view all <span></span> reviews
        </div>
    </div>

export default ReviewsHeader;