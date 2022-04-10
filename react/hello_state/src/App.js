import React, { Component } from 'react';

class App extends Component {
  state = {
    hello: 'hello app js!'
  };

  render() {
    return <div className="App">{this.state.hello}</div>;
  }
}

export default App;
