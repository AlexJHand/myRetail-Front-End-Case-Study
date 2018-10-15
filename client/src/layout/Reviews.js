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
                        <i class="fas fa-star reviewStarFilled"></i>
                        <i class="fas fa-star reviewStarEmpty"></i>
                        <i class="fas fa-star reviewStarEmpty"></i>
                        <i class="fas fa-star reviewStarEmpty"></i>
                        <i class="fas fa-star reviewStarEmpty"></i>
                    </div>
                )
            case ("2"):
                return (
                    <div>
                        <i class="fas fa-star reviewStarFilled"></i>
                        <i class="fas fa-star reviewStarFilled"></i>
                        <i class="fas fa-star reviewStarEmpty"></i>
                        <i class="fas fa-star reviewStarEmpty"></i>
                        <i class="fas fa-star reviewStarEmpty"></i>
                    </div>
                )
            case ("3"):
                return (
                    <div>
                        <i class="fas fa-star reviewStarFilled"></i>
                        <i class="fas fa-star reviewStarFilled"></i>
                        <i class="fas fa-star reviewStarFilled"></i>
                        <i class="fas fa-star reviewStarEmpty"></i>
                        <i class="fas fa-star reviewStarEmpty"></i>
                    </div>
                )
            case ("4"):
                return (
                    <div>
                        <i class="fas fa-star reviewStarFilled"></i>
                        <i class="fas fa-star reviewStarFilled"></i>
                        <i class="fas fa-star reviewStarFilled"></i>
                        <i class="fas fa-star reviewStarFilled"></i>
                        <i class="fas fa-star reviewStarEmpty"></i>
                    </div>
                )
            case ("5"):
                return (
                    <div>
                        <i class="fas fa-star reviewStarFilled"></i>
                        <i class="fas fa-star reviewStarFilled"></i>
                        <i class="fas fa-star reviewStarFilled"></i>
                        <i class="fas fa-star reviewStarFilled"></i>
                        <i class="fas fa-star reviewStarFilled"></i>
                    </div>
                )
            default: 
                return (
                    <div>
                        <i class="fas fa-star reviewStarEmpty"></i>
                        <i class="fas fa-star reviewStarEmpty"></i>
                        <i class="fas fa-star reviewStarEmpty"></i>
                        <i class="fas fa-star reviewStarEmpty"></i>
                        <i class="fas fa-star reviewStarEmpty"></i>
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
            <div className="reviews">
                <ReviewsHeader />
                <ReviewsBox />
            </div>
        )
    }
}