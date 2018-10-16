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
            imageArray: null,
            selectedImageNum: 0
        }

        this.selectLeft = this.selectLeft.bind(this);
        this.selectRight = this.selectRight.bind(this);
    }

    componentDidMount() {
        let imageArray = [this.state.selectedImage];
        this.props.images.AlternateImages.forEach(image => {
            imageArray.push(image.image);
        });
        this.setState({
            imageArray: imageArray,
            subImage1: imageArray[imageArray.length - 1],
            subImage2: imageArray[0],
            subImage3: imageArray[1]
        });
    }

    selectLeft() {
        let newImgIndex = this.state.selectedImageNum;
        let prevImage = this.state.selectedImageNum - 1;
        let nextImage = this.state.selectedImageNum + 1;
        if (newImgIndex === 0) {
            prevImage = this.state.imageArray.length - 2;
            newImgIndex = this.state.imageArray.length - 1;
            nextImage = 0
        } else if (newImgIndex === 1) {
            prevImage = this.state.imageArray.length - 1;
            newImgIndex = 0;
            nextImage = 1;
        } else if (newImgIndex === this.state.imageArray.length - 1) {
            prevImage--;
            newImgIndex--;
            nextImage = this.state.imageArray.length - 1;
        } else {
            prevImage--;
            newImgIndex--;
            nextImage--;
        }
        this.setState({
            selectedImageNum: newImgIndex,
            selectedImage: this.state.imageArray[newImgIndex] ,
            subImage1: this.state.imageArray[prevImage],
            subImage2: this.state.imageArray[newImgIndex],
            subImage3: this.state.imageArray[nextImage]
        });
    }

    selectRight() {
        let newImgIndex = this.state.selectedImageNum;
        let prevImage = this.state.selectedImageNum - 1;
        let nextImage = this.state.selectedImageNum + 1;
        if (newImgIndex === this.state.imageArray.length - 1) {
            prevImage++;
            newImgIndex = 0;
            nextImage = 1;
        } else if (newImgIndex === this.state.imageArray.length - 2) {
            prevImage++;
            newImgIndex++;
            nextImage = 0;
        } else if (newImgIndex === 0) {
            prevImage = 0;
            newImgIndex++;
            nextImage++;
        } else {
            prevImage++;
            newImgIndex++;
            nextImage++;
        }
        this.setState({ 
            selectedImageNum: newImgIndex,
            selectedImage: this.state.imageArray[newImgIndex],
            subImage1: this.state.imageArray[prevImage],
            subImage2: this.state.imageArray[newImgIndex],
            subImage3: this.state.imageArray[nextImage]
        });
    }

    render() {
        if (this.state.imageArray) {
            return (
                <div>
                    <MainImage image={this.state.selectedImage} title={this.props.title}/>
                    <div onClick={this.selectLeft}>&#x3008;</div>
                    <SubImage image={this.state.subImage1} title={this.props.title} onClick={this.selectLeft}/>
                    <SubImage image={this.state.subImage2} title={this.props.title} />
                    <SubImage image={this.state.subImage3} title={this.props.title} onClick={this.selectRight}/>
                    <div onClick={this.selectRight}>&#x3009;</div>
                </div>
            )
        } else {
            return <div></div>
        }
       
    }
}