import React from "react";
import PropTypes from "prop-types";

import "./Display.css";

/**
 * This class generates display that contains props.value.
 * value is an input argument of the <Display ...tag>
 */
export default class Display extends React.Component {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    return (
      <div className="component-display">
        <div>{this.props.value}</div>
      </div>
    );
  }
}
