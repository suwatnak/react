import React, { Component } from 'react';

const forAuth = (WrappedComponent) => {
  return props => props.isLogin ? <WrappedComponent{...props} /> : null
}

const ProtectedComponent = ({isLogin}) => (
  <h1>ProtectedComponent Connect {isLogin.toString()}</h1>
)

const EnhancedComponent = forAuth(ProtectedComponent)

class App extends Component {
  state = {
    isLogin: false,
  }
  togglelogin = () => {
    this.setState((prevstate) => ({ isLogin: !prevstate.isLogin }
    ))
  }
  render() {
    return (
      <div>
        <button onClick={this.togglelogin}>toggleButtomooo</button>
        <EnhancedComponent isLogin={this.state.isLogin} />
      </div>
    );
  }
}

export default App;