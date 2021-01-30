import ImageCard from './ImageCard'

const ImageList = (props) => {

    // mapping through all the images, 
    // sending them to ImageCard
    const images = props.images.map( (image) => {
        return <ImageCard key={image.id} image={image}/>
    })
    return ( 
        <div className="image-list">{images}</div>
    );
}

export default ImageList;