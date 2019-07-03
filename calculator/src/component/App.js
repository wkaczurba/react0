import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    console.log('App: got a handleClick event: ' + buttonName + ';');

    // setState sets a result of logic/calculate.js method.
    // It updates the screen with a new value.
    this.setState(calculate(this.state, buttonName));
    console.log('App: changed state to ' + JSON.stringify(this.state));
  };

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
