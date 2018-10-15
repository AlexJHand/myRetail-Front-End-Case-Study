import React from 'react';

import ReviewsBoxTitle from './ReviewsBoxTitle';
import TopReview from './TopReview';

const ReviewsBox = (props) =>
    <div className="reviewsBox">
        <div className="reviewsTitle">
            <ReviewsBoxTitle className="proReviewTitle" reviewScores="4-5" title="PRO"/>
            <ReviewsBoxTitle className="conReviewTitle" reviewScores="1-2" title="CON"/>
        </div>
        <TopReview review={props.proReview} buildStars={props.buildStars} proStars={props.proStars}/>
        <TopReview review={props.conReview} buildStars={props.buildStars} proStars={props.conStars} />
    </div>

export default ReviewsBox;