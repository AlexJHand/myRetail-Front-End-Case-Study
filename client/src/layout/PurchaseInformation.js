import React from 'react';

import Promotion from '../components/Promotion';
import QuantityBox from '../components/QuantityBox';
import Returns from '../components/Returns';

export default class PurchaseInformation extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            quantity: 1
        }
        this.displayButtons = this.displayButtons.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    displayButtons() {
        switch (this.props.purchasingChannelCode) {
            case("0"):
                return (
                    <div className="buyButtons">
                        <button type="button" className="inStoreBtn">Pick Up In Store</button>
                        <button type="button" className="cartBtn">Add To Cart</button>
                    </div>
                )
            case("1"):
                return (
                    <div className="buyButtons">
                        <button type="button" className="cartBtn">Add To Cart</button>
                    </div>
                )
            case("2"):
                return (
                    <div className="buyButtons">
                        <button type="button" className="inStoreBtn">Pick Up In Store</button>
                    </div>
                )
            default:
                return (
                    <div className="buyButtons"></div>
                )
        }
    }

    handleChange(change) {
        console.log("Direction change", change);
        let newQuantity = this.state.quantity;
        if (change === "up" && this.state.quantity < 999) {
            newQuantity++;
        } else if (change === "down" && this.state.quantity > 0) {
            newQuantity--;
        }
        this.setState({quantity: newQuantity});
        
    }

    render() {
        return (
            <div className="purchaseInformation">
                <div className="priceBox">
                    <h3 className="priceNumber">{this.props.price.formattedPriceValue}</h3>
                    <span className="priceQualifier">{this.props.price.priceQualifier}</span>
                </div>
                <hr/>
                <div className="promotions">
                    <Promotion description={this.props.promotions[0].Description[0].shortDescription}/>
                    <Promotion description={this.props.promotions[1].Description[0].shortDescription}/>
                </div>
                <hr />
                <QuantityBox quantity={this.state.quantity} onClick={this.handleChange} />
                {this.displayButtons()}
                <Returns />
                <button type="button" className="registryBtn">Add To Registry</button>
                <button type="button" className="listBtn">Add To List</button>
                <button type="button" className="shareBtn">Add To Share</button>
            </div>
        )
    }
}