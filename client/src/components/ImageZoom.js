import React from 'react';

export default class ImageZoom extends React.Component {
    render() {
        return (
            <div className="imageZoom">
                <i className="fas fa-search-plus imageZoomIcon"></i>
                {/* <span className="vl" /> */}
                <p className="imageZoomText">view larger</p>
            </div>
        )
    }
}