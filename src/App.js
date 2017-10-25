import React, { Component } from 'react';

const forAuth = (WrappedComponent) => {
  return props => props.isLogin ? WrappedComponent(...props) : null
}

const ProtectedComponent = (props) => (
  <h1>ProtectedComponent Connect {props.toString()}</h1>
)

const EnhancedComponent = forAuth(ProtectedComponent)

class App extends Component {
  state = {
    isLogin: false,
  }
  togglelogin = () => {
    this.setState((prevStart) => ({ isLogin: !prevStart.isLogin }
    ))
  }
  render() {
    return (
      <div>
        <button onclick={this.togglelogin}>toggleButtom</button>
        <EnhancedComponent isLogin={this.state.isLogin} />
      </div>
    );
  }
}

export default App;