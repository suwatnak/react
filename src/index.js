import React from 'react'
import ReactDom from 'react-dom'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBn7qXlMPqw4stUd6yx4R56_ZeLeW-0PQA'

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

ReactDom.render(<App />, document.querySelector('.container'))