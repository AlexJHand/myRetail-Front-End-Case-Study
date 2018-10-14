import React from 'react';
import axios from 'axios';

import DisplayInformation from '../layout/DisplayInformation';

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
                <DisplayInformation key={this.state.product.itemId} title={this.state.product.title}/>
            )
        } else {
            return <div></div>
        }
        
    }
}