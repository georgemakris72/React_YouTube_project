import React, { Component } from 'react';

// functional component
// const SearchBar = () => {
//   return <input />;
// };

// class based component
// class SearchBar  extends React.Component{
//   render() {
//     return <input />;
//   }
// }

class SearchBar  extends Component{
  constructor(props)  {
    super(props);

    this.state = {term: ''};  //Only time we manually change value of state otherwise use setState
  }


  render() {
    // return <input onChange={this.onInputChange} />;
    // return <input onChange={event => console.log(event.target.value)} />;
    return (
      <div className = "search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  // onInputChange(event)  {
  //   console.log(event.target.value);
  // }
}


export default SearchBar;
