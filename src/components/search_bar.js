import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { term: 'String value' }
  }

  onInputChange(event) {
    console.log(event.target.value)
    this.setState({ term: event.target.value })
    // this.setState({ term: event.target.value })
  }
  render() {
    return (
      <div>
        <input onChange={event => this.setState({ term: event.target.value })} value={this.state.term} />
        value of the input :{this.state.term}
      </div>
    );
  }
}

export default SearchBar
