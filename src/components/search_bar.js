import React, { Component } from 'react'; //object destructuring


/* const SearchBar = () => {
  return <input/>; //React.createElement()
} */
//CLASS required to have something that can detect changes (Ex input change)

class SearchBar extends Component { //gives SearchBar functionality from React.comp class
  //Every class based component has a render method

  constructor(props){
    super(props);
    this.state = { term : 'SS' } //term = search term
  }

  render () { //this is still a function. (it doesnt look like one)
    return (
        <div>
          <input
          value={this.state.term}  //the value of input is always the states.
          onChange={this.onInputChange.bind(this)} //component re-renders val of state.term is input.
          />
        </div>

    )
  }

  onInputChange(e) { //General form --> "on" "Watching" "Change", event "e"
    //console.log(e.target.value);
    this.setState({ term : e.target.value }); //must use setState outside constructor.

  }


//STATE re-renders everything
}

export default SearchBar;
