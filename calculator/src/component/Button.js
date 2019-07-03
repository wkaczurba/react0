import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

// This is a button.
export default class Button extends React.Component {


  static propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func, // method for handling clicks.
  };


  handleClick = () => {
    console.log('Button-object got a click. Propagating the click to this.props.clickHandler');
    this.props.clickHandler(this.props.name); // props.names holds the name (value) of the button
  };

  /**
   * Method returns HTML-y code for a button with properties.
   *  - Once clicked button calls "handleClick method" that belongs to this class
   *
   * @returns {*}
   */
  render() {
    const className = [
      "component-button",
      this.props.orange ? "orange" : "", // additional properitds
      this.props.wide ? "wide" : "", // additional properties
    ];

    return (
      <div className={className.join(" ").trim()}>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}
