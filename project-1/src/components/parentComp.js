import React, { Component } from "react";
import MemoComp from "./MemoComp";
import PureComp from "./PureComp";

class parentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Devam",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Devam",
      });
    }, 2000);
  }
  // For Display chnage idea create a button which chnages the state so that the pure components re renders now for the reference watch tutorial 26 at 10.30.

  render() {
    console.log("*****************Parent Component************");
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />
        {/* <PureComp name={this.state.name} /> */}
      </div>
    );
  }
}

export default parentComp;
