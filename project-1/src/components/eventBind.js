import React, { Component } from "react";

class eventBind extends Component {
  constructor() {
    super();
    this.state = {
      message: "I Don't know what to write.",
    };
    // this.clickHandling = this.clickHandling.bind(this);
  }

  //   clickHandling() {
  //     this.setState({
  //       message: "Good Byee!!",
  //     });
  //     console.log(this);
  //   }
  clickHandling = () => {
    this.setState({ message: "Byee!!" });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandling.bind(this)}>Click here</button> */}
        <button onClick={this.clickHandling}>Click here</button>
      </div>
    );
  }
}

export default eventBind;
