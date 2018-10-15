import React from 'react';

export default class ProductInformation extends React.Component {

    render() {
        return (
            <div>
                <h3>product highlights</h3>
                <ul>
                    {this.props.features.map(function(feature, index) {
                        return <li dangerouslySetInnerHTML={{__html: feature}} key={index}></li>
                    })}
                </ul>
            </div>
        )
    }
}