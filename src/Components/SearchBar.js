import { Component } from 'react';

class SearchBar extends Component {

    state = { term: '' }

    onFormSubmit = (e) => {
        e.preventDefault();

        // to reference the function onSearchSubmit inside prop from App.js  
        // we need to mention the name onSubmit by which it was saved
        this.props.onSubmit( this.state.term )
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
// now whenever use submit form we are going to run onFormSubmit() from line 18
// which will take the event and prevent default that would have caused 
// the page to refesh itself
// then we look at props object line 12 and call the function which was passed into 
// onSubmit prop in App.js and invoke that function onSearchSubmit()
//  with this.state.term
export default SearchBar;