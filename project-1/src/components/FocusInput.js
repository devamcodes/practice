import React, { Component } from "react";
import Input from "./Input";

class FocusInput extends Component {
  constructor(props) {
    super(props);

    this.ComponentRef = React.createRef();
  }

  focusinputref = () => {
    this.ComponentRef.current.focusInput();
  };
  render() {
    return (
      <div>
        <Input ref={this.ComponentRef} />
        <button onClick={this.focusinputref}>Focus Input</button>
      </div>
    );
  }
}

export default FocusInput;
