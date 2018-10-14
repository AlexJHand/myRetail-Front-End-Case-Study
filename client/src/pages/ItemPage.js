import React from 'react';
import axios from 'axios';

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
        return (
            <div></div>
        )
    }
}