import React from 'react';

import MainImage from './MainImage';
import SubImage from './SubImage';

export default class ImageViewer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedImage: this.props.images.PrimaryImage[0].image,
            subImage1: null,
            subImage2: null,
            subImage3: null,
            imageArray: null
        }
    }

    componentDidMount() {
        let imageArray = [this.state.selectedImage];
        this.props.images.AlternateImages.forEach(image => {
            imageArray.push(image.image);
        });
        this.setState({
            imageArray: imageArray,
            subImage1: imageArray[1],
            subImage2: imageArray[2],
            subImage3: imageArray[3]
        });
        
    }

    render() {
        if (this.state.imageArray) {
            return (
                <div>
                    <MainImage image={this.state.selectedImage} title={this.props.title}/>
                    <div>&#x3008;</div>
                    <SubImage image={this.state.subImage1} title={this.props.title} />
                    <SubImage image={this.state.subImage2} title={this.props.title} />
                    <SubImage image={this.state.subImage3} title={this.props.title} />
                    <div>&#x3009;</div>
                </div>
            )
        } else {
            return <div></div>
        }
       
    }
}