import { Component } from 'react';
import SearchBar from './SearchBar'

class App extends Component {

  onSearchSubmit(term){
    console.log(term);

  }

  render() {

    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        {/* passing function onSearchSubmit as prop */}
        {/* prop name onSubmit is user defined name, so can be anything */}
      <SearchBar onSubmit={ this.onSearchSubmit }/>
      </div>
    )
  }
}

export default App;
