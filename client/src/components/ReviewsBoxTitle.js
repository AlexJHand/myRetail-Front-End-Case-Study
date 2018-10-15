import React from 'react';

const ReviewsBoxTitle = (props) => 
    <div>
        <h4>{props.title}</h4>
        <p>most helpful {props.reviewScores} star review</p>
    </div>

export default ReviewsBoxTitle;