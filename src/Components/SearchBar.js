import { Component } from 'react';

class SearchBar extends Component {

    onInputChange(value){
        this.setState( {term:value} ) ;
        console.log(this.state.term)
    }

    state = { term: '' }

    render (  ){
        return(
            <div className="ui segment">
                <form className="ui form" >
                    <div className="field">
                        <label >Image Search</label>
                        <input type="text" 
                        // example of controlled element
                        // now React control the storage
                        value={ this.state.term }
                        onChange={
                            (e) =>  { this.onInputChange(e.target.value) }
                            // (e) =>  this.onInputChange({ term: e.target.value })
                        }/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;