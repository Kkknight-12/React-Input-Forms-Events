const ImageList = (props) => {

    // mapping through all the images and storing, 
    // returning image tag with image
    const images = props.images.map(
        (image) => {
            // adding key which will contain id 
            // key must be assigned to the root element
            // if we were passing a div then div would have it
        return (
        <img key={image.id} 
            src={image.urls.regular}
            alt = {image.description}/>
        )
    })
    return ( 
        <div>{images}</div>
     );
}
 
export default ImageList;