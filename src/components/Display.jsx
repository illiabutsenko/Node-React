import React from "react";

export default class Display extends React.Component {
  render() {
    return <h2>{this.props.count}</h2>
  }
}
