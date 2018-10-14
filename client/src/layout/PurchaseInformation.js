import React from 'react';

import Promotion from '../components/Promotion';

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
                <Promotion description={this.props.promotions[1].Description[0].shortDescription} />
            </div>
        )
    }
}