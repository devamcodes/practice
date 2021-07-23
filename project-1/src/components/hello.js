import React, { Component } from "react";

class hello extends Component {
  render() {
    const { name, heroName } = this.props;
    if (heroName === "Jamse") {
      throw new Error("Not a hero");
    } else {
      return (
        <h2>
          Hello {name} aka {heroName}
        </h2>
      );
    }
  }
}

export default hello;
