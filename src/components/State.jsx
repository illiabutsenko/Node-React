import React from "react";

export default class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }

  changeState = () => {
    this.setState((prevState) => ({ count: prevState.count * 2 }));
  };
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.changeState}>state * 2</button>
      </div>
    );
  }
}
