import React from 'react';

const ReviewsBoxTitle = (props) => 
    <div className={props.className}>
        <h4 className="previewsBoxTitleHeader">{props.title}</h4>
        <p className="previewsBoxTitleText">most helpful {props.reviewScores} star review</p>
    </div>

export default ReviewsBoxTitle;