import React, { Component } from "react";
import UpdatedComponent from "./WithCounter";
class Counter extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       count: 0,
  //     };
  //   }

  //   increment() {
  //     // this.setState(
  //     //   {
  //     //     count: this.state.count + 1,
  //     //   },
  //     //   () => {
  //     //     console.log("incremented value-", this.state.count);
  //     //   }
  //     // );
  //     this.setState((state) => ({ count: state.count + 1 }));
  //   }

  //   incrementFour() {
  //     this.increment();
  //     this.increment();
  //     this.increment();
  //     this.increment();
  //   }
  render() {
    const { count, incrementCount } = this.props;
    return (
      // <div>
      //   <div>Counter - {this.state.count}</div>
      //   <button onClick={() => this.incrementFour()}>Increase</button>
      // </div>
      <button onClick={incrementCount}>Clicked {count} times</button>
    );
  }
}

export default UpdatedComponent(Counter);
