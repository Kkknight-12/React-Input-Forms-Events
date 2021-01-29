import { Component } from 'react';

class SearchBar extends Component {

    render (  ){
        return(
            <div className="ui segment">
                <form className="ui form" >
                    <div className="field">
                        <label >Image Search</label>
                        <input type="text" 
                        // example of uncontrolled form element
                        // value stays inside HTML document
                        // input tag stored value
                        onChange={
                            (e) => console.log(e.target.value) 
                        }/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;

