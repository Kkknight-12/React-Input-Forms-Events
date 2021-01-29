import { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'

class App extends Component {

// async key is written in front of method name
  async onSearchSubmit(term){
    
    // we write await keyword in front of thing that we want to return
    // or thing that take sometime here network request
    // whatever it return is stored in some variable
    const response = await axios.get( 'https://api.unsplash.com/search/photos', {
      // params defines different query parameter we want to add into the request
      params: { query: term },
      headers: {
        Authorization: 'Client-ID _VtG5n6vKkM5SjzwCyxZler0e-VsjL3QDeo_p-w0av0'
      }
    }) 

    // than we can work with the variable later on
    // here showing output
    console.log( response.data.results )

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
