import { Component } from 'react';
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends Component {

  // Initializing state
  // whenever we expect state property to  contain object/array
  // we usually intializse property to be an empty object/array
  // that allow us to call  certain functions on this state property
  // without getting error like funciton not found etc..
  state =  { images: [ ] };

  // making the function arrow to use this.setState
  onSearchSubmit = async (term) => {
    
    // now you make request to unsplash.js file
    const response = await unsplash.get( '/search/photos', {
      params: { query: term },
    }) 

    // map function is built into array object in Js
    // if you call map on value of null you will end up with error message
    // but if you can call map function on empty array it will run
    // this.state.images.map
    // commenting it out as it is not need here

    this.setState( { images: response.data.results });
    // after making request over to splash we get repsone we pull results
    // we set it on our state object and that will cause our component to
    // re-render

  }

  render() {

    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <SearchBar onSubmit={ this.onSearchSubmit }/>

        {/* passing on images to prop images */}
        <ImageList images={ this.state.images }/>
      </div>
    )
  }
}

export default App;
