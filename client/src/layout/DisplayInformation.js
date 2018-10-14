import React from 'react';

import ImageViewer from '../components/ImageViewer';
import ProductName from '../components/ProductName';

export default class DisplayInformation extends React.Component {
    
    render() {
        return (
            <div className="DisplayInformation">
                <ProductName title={this.props.title} />
                <ImageViewer images={this.props.Images[0]} />
            </div>
        )
    }
}