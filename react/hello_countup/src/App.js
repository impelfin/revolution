import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0
  };

  countUP = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div className="App">
        <div>{this.state.count}</div>
        <button onClick={this.countUP}>count up!</button>
      </div>
    );
  }
}

export default App;
