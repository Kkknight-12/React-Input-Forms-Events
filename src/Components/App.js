import { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'

class App extends Component {

  // Initializing state
  // whenever we expect state property to  contain object/array
  // we usually intializse property to be an empty object/array
  // that allow us to call  certain functions on this state property
  // without getting error like funciton not found etc..
  state =  { images: [ ] };

  // making the function arrow to use this.setState
  onSearchSubmit = async (term) => {
    
    const response = await axios.get( 'https://api.unsplash.com/search/photos', {

      params: { query: term },
      headers: {
        Authorization: 'Client-ID _VtG5n6vKkM5SjzwCyxZler0e-VsjL3QDeo_p-w0av0'
      }
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

      {/* settting the images to empty array helps here too 
      as if we have set it to null, length of images would give 
      error message said cannot access property of length null */}
      Found : { this.state.images.length } images
      </div>
    )
  }
}

export default App;
