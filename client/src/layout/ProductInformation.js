import React from 'react';

export default class ProductInformation extends React.Component {

    render() {
        return (
            <div className="layoutItem productInformation">
                <h3 className="productHighlightsTitle">product highlights</h3>
                <ul className="productHighlightsList">
                    {this.props.features.map(function(feature, index) {
                        return <li className="productHighlightsItem" 
                                    dangerouslySetInnerHTML={{__html: feature}} 
                                    key={index}>
                                </li>
                    })}
                </ul>
            </div>
        )
    }
}