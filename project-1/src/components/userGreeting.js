import React, { Component } from "react";

class userGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // return this.state.isLoggedIn && <div>Welcome Devam</div>;
    return this.state.isLoggedIn ? (
      <div>Welcome Devam</div>
    ) : (
      <div>Welcome Guest</div>
    );
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Devam</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Devam</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
  }
}

export default userGreeting;
