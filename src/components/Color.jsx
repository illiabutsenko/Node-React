import React from "react";

export default class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "blue" };
  }

  changeColor = () => {
    this.setState({ color: (this.state.color = "red") });
  };
  render() {
    return (
      <div>
        <h2>Current color: {this.state.color}</h2>
        <button onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}
