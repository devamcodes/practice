import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Username: "",
      Comments: "",
      Sports: "tennis",
    };
  }

  handleUserNamechange = (event) => {
    this.setState({
      Username: event.target.value,
    });
  };
  handleCommentschange = (event) => {
    this.setState({
      Comments: event.target.value,
    });
  };
  handleSportschange = (event) => {
    this.setState({
      Sports: event.target.value,
    });
  };
  handleSubmit = (event) => {
    alert(
      `${this.state.Username} with comment ${this.state.Comments} supported ${this.state.Sports}`
    );
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>User Name:</label>
          <input
            type="text"
            value={this.state.Username}
            onChange={this.handleUserNamechange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            type="text"
            value={this.state.Comments}
            onChange={this.handleCommentschange}
          >
            Any Comments??
          </textarea>
        </div>
        <div>
          <label>Sports</label>
          <select
            type="list"
            value={this.state.Sports}
            onChange={this.handleSportschange}
          >
            <option value="cricket">Criket</option>
            <option value="kabaddi">Kabaddi</option>
            <option value="batminton">Batminton</option>
            <option value="tennis">Tennis</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
