import React from "react";
import Display from "./Display";
import { Button } from "./Button/Button";

export default class CounterOld extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div>
        <Display count={this.state.count} />
        <Button onClick={this.incrementCount}>Increment</Button>
        <Button primary onClick={this.decrementCount}>Decrement</Button>
      </div>
    );
  }
}
