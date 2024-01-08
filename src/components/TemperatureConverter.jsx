import React from "react";

export default class TemperatureConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: 0 };
  }

  fahrenheit = () => {
    let a1 = document.getElementById("input1");
    let a2 = a1.value;
    this.setState({ temperature: (a2 * 9) / 5 + 32 });
  };

  render() {
    return (
      <div>
        <br />
        <input id="input1" placeholder="по Цельсію:" />
        <button onClick={this.fahrenheit}>Ок</button>
        <br />
        <input value={this.state.temperature + " по Фаренгейту"} />
      </div>
    );
  }
}
