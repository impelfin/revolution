import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0
  };

  handleChange = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div className="App">
        <h3> Index Props </h3>
        <div className="props">
          {/* Props가 들어가는 부분입니다! */}
          <span>{this.props.message}</span>
        </div>

        <h3> State </h3>
        <div className="state">
          {/* state가 들어가는 부분입니다! */}
          {this.state.count}{'\n'}
          <p>{"\n"}</p>
          <button onClick={this.handleChange}>Click Me!</button>
        </div>

        <h3> App Props </h3>
        <div className="inside-app-props">
          <InsideApp
            count = {this.state.count}
            handleChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

class InsideApp extends Component {
  render() {
    return (
      <div>
        {this.props.count}
        <p>{"\n"}</p>
        <button onClick={this.props.handleChange}>Click Me!</button>
      </div>
    )
  }
}

export default App;
