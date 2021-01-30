// purpose of this component is to show one image by
// itself.
// this component expects to be passed a prop of image object
// which we get back from unsplash API.

import { Component } from "react";
import React from 'react';

class ImageCard extends Component {

    // createRef is used in React’s class components, 
    // React’s useRef Hook is used in React function components.
    // Now creating refernce to createRef() 
    // and assigning it to instance variable
    // so that we can refer back to it later on inside class
    imageRef = React.createRef();

    // using setState with initial value zero
    state = { spans: 0 }

    // componentDidMount will be called after render
    componentDidMount(){
        // image height can only be accessed once the image are finished loading
        // adding event listener which will trigger setSpans() on load
        this.imageRef.current.addEventListener( 'load', this.setSpans )
    }

    // now we will collect height once image is laoded
    setSpans = () => {
        const height =  this.imageRef.current.clientHeight;

        // calculating how many spans will each image will take
        // if an image have height of 375, then
        // span = 375/10 => 38
        // we will give 38 span to that image
        // where the height of each span will be 10pixel
        // so 38*10 - 380 px height will be given you that image
        const spans = Math.ceil( height / 10 )

        this.setState( { spans: spans })
    }
    
    render(){
        // destructuring props
        const { description, urls } = this.props.image;

        return(
            <div style={ { gridRowEnd:`span ${ this.state.spans }`} }>
                <img 
                    //passing new prop -> ref
                    ref={ this.imageRef }
                    alt={ description }
                    src={ urls.regular }/>
            </div>
        )

    }
}

export default ImageCard;