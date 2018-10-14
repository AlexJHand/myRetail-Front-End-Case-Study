import React from 'react';
import axios from 'axios';

import DisplayInformation from '../layout/DisplayInformation';
import PurchaseInformation from '../layout/PurchaseInformation';

export default class ItemPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            product: null
        }

        
    }

    componentDidMount() {
        console.log("In componentDidMount");
        axios(`/products`)
            .then(product => this.setState({product: product.data.CatalogEntryView[0]}))
            .catch(error => error)
    }

    render() {
        if (this.state.product) {
            return (
                <div className="itemPage">
                    <DisplayInformation 
                        key={this.state.product.itemId} 
                        title={this.state.product.title}
                        images={this.state.product.Images[0]}
                    />
                    <PurchaseInformation 
                        price={this.state.product.Offers[0].OfferPrice[0]}
                        promotions={this.state.product.Promotions}
                        returns={this.state.product.ReturnPolicy[0].legalCopy}
                    />
                </div>
            )
        } else {
            return <div></div>
        }
        
    }
}