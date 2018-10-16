import React from 'react';

export default class TopReview extends React.Component {
    constructor(props) {
        super(props);

        this.convertTime = this.convertTime.bind(this);
    }

    convertTime() {
        const date = this.props.review.datePosted;
        let dateObj = new Date(Date.parse(date));
        let convertedDate = dateObj.toDateString();
        return convertedDate
    }

    render() {
        return (
            <div className="topReview">
                <div className="topReviewStars">{this.props.buildStars(this.props.proStars)}</div>
                <div className="topReviewTitle">{this.props.review.title}</div>
                <div className="topReviewText">{this.props.review.review}</div>
                <div className="topReviewSignature">
                    <span className="screenName">{this.props.review.screenName} </span>
                    {this.convertTime()}
                </div>
            </div>

        )
    }
}