import ReactDOM from "react-dom/client";
import React from "react";

function Welcome(props) {
  return <h1>¡Hola, {props.name}!</h1>;
}

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "blue" };
    this.state = { count: 0 };
  }

  changeColor = () => {
    this.setState({ color: (this.state.color = "red") });
  };

  IncrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    console.log("Mount");
  }

  componentDidUpdate() {
    console.log("Update");
  }

  render() {
    return (
      <div>
        <h2>Current color: {this.state.color}</h2>
        <button onClick={this.changeColor}>Change color</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.IncrementCount}>Increment</button>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Welcome name="Illia" />
      <Color />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App());
