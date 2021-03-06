import React from 'react';

import ReviewsBox from '../components/ReviewsBox';
import ReviewsHeader from '../components/ReviewsHeader';

export default class Reviews extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            totalStars: null,
            proStars: null,
            conStars: null
        }

        this.createStars = this.createStars.bind(this);
        this.getScores = this.getScores.bind(this);
    }

    createStars(score) {
        switch(score) {
            case("1"):
                return (
                    <div>
                        <span className="reviewStarFilled">&#x2605;</span>
                        <span className="reviewStarEmpty">&#x2605;</span>
                        <span className="reviewStarEmpty">&#x2605;</span>
                        <span className="reviewStarEmpty">&#x2605;</span>
                        <span className="reviewStarEmpty">&#x2605;</span>
                    </div>
                )
            case ("2"):
                return (
                    <div>
                        <span className="reviewStarFilled">&#x2605;</span>
                        <span className="reviewStarFilled">&#x2605;</span>
                        <span className="reviewStarEmpty">&#x2605;</span>
                        <span className="reviewStarEmpty">&#x2605;</span>
                        <span className="reviewStarEmpty">&#x2605;</span>
                    </div>
                )
            case ("3"):
                return (
                    <div>
                        <span className="reviewStarFilled">&#x2605;</span>
                        <span className="reviewStarFilled">&#x2605;</span>
                        <span className="reviewStarFilled">&#x2605;</span>
                        <span className="reviewStarEmpty">&#x2605;</span>
                        <span className="reviewStarEmpty">&#x2605;</span>
                    </div>
                )
            case ("4"):
                return (
                    <div>
                        <span className="reviewStarFilled">&#x2605;</span>
                        <span className="reviewStarFilled">&#x2605;</span>
                        <span className="reviewStarFilled">&#x2605;</span>
                        <span className="reviewStarFilled">&#x2605;</span>
                        <span className="reviewStarEmpty">&#x2605;</span>
                    </div>
                )
            case ("5"):
                return (
                    <div>
                        <span className="reviewStarFilled">&#x2605;</span>
                        <span className="reviewStarFilled">&#x2605;</span>
                        <span className="reviewStarFilled">&#x2605;</span>
                        <span className="reviewStarFilled">&#x2605;</span>
                        <span className="reviewStarFilled">&#x2605;</span>
                    </div>
                )
            default: 
                return (
                    <div>
                        <span className="reviewStarEmpty">&#x2605;</span>
                        <span className="reviewStarEmpty">&#x2605;</span>
                        <span className="reviewStarEmpty">&#x2605;</span>
                        <span className="reviewStarEmpty">&#x2605;</span>
                        <span className="reviewStarEmpty">&#x2605;</span>
                    </div>
                )
        }
        
    }

    componentDidMount() {
        this.getScores();
    }

    getScores() {
        this.setState({
            totalStars: this.props.overallScore,
            proStars: this.props.pro.overallRating,
            conStars: this.props.con.overallRating,
        })
    }

    render() {
        return (
            <div className="layoutItem reviews">
                <ReviewsHeader 
                    buildStars={this.createStars} 
                    totalStars={this.state.totalStars} 
                    totalReviews={this.props.totalReviews}
                />
                <ReviewsBox 
                    buildStars={this.createStars}
                    proStars={this.state.proStars}
                    conStars={this.state.conStars}
                    proReview={this.props.pro}
                    conReview={this.props.con}
                />
            </div>
        )
    }
}