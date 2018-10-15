import React from 'react';

import Promotion from '../components/Promotion';
import Returns from '../components/Returns';

export default class PurchaseInformation extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            quantity: 1
        }
    }

    render() {
        return (
            <div>
                <div><h3>{this.props.price.formattedPriceValue}</h3><span>{this.props.price.priceQualifier}</span></div>
                <Promotion description={this.props.promotions[0].Description[0].shortDescription}/>
                <Promotion description={this.props.promotions[1].Description[0].shortDescription}/>
                <button type="button" className="inStoreBtn">Pick Up In Store</button>
                <button type="button" className="cartBtn">Add To Cart</button>
                <Returns />
                <button type="button" className="registryBtn">Add To Registry</button>
                <button type="button" className="listBtn">Add To List</button>
                <button type="button" className="shareBtn">Add To Share</button>
            </div>
        )
    }
}