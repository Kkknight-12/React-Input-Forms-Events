import { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'

class App extends Component {

  onSearchSubmit(term){
    
    // take two argument
    // first is path of request
    // second is object that customise the request
    axios.get( 'https://api.unsplash.com/search/photos', {
      // params defines different query parameter we want to add into the request
      params: { query: term },
      headers: {
        Authorization: 'Client-ID _VtG5n6vKkM5SjzwCyxZler0e-VsjL3QDeo_p-w0av0'
      }
    })
  }

  render() {

    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
      <SearchBar onSubmit={ this.onSearchSubmit }/>
      </div>
    )
  }
}

export default App;
