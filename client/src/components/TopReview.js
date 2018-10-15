import React from 'react';

const TopReview = (props) =>
    <div className="topReview">
        <div className="topReviewStars">{props.buildStars(props.proStars)}</div>
        <div className="topReviewTitle">{props.review.title}</div>
        <div className="topReviewText">{props.review.review}</div>
        <div className="topReviewSignature">
            <span className="screenName">{props.review.screenName} </span>
            {props.review.datePosted}
        </div>
    </div>

export default TopReview;