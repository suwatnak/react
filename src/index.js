import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
const API_KEY = 'AIzaSyBn7qXlMPqw4stUd6yx4R56_ZeLeW-0PQA'

YTSearch({ key: API_KEY, term: 'surfboars' }, (data) => {
  console.log(data)
})

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))