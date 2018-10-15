import React from 'react';

const ReviewsHeader = (props) => 
    <div className="reviewsHeader">
        <div className="reviewsOverallScore">
            <span className="reviewsOverallStars">{props.buildStars(props.totalStars)}</span>
            <span className="reviewsOverallText">overall</span>
        </div>
        <div className="reviewsTotal">
            view all <span>{props.totalReviews}</span> reviews
        </div>
    </div>

export default ReviewsHeader;