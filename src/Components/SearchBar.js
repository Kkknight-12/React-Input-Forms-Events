import { Component } from 'react';

class SearchBar extends Component {

    state = { term: '' }

    // using arrow function
    onFormSubmit = (e) => {
        e.preventDefault();

        // if arrow function is not used value of this will refer to 
        // onFormSubmit() and result in error undefined value of state.
        console.log(this.state.term);
    }

    render( ) {
        return(
            <div className="ui segment">
                <form onSubmit={ this.onFormSubmit } className="ui form" >
                    <div className="field">
                        <label >Image Search</label>
                        <input type="text" 
                        // example of controlled element
                        // now React control the storage
                        value={ this.state.term }
                        onChange={
                            (e) =>  this.setState({ term: e.target.value })
                        }/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;