import React, { Component } from "react";
import axios from "axios";

// Form component.
class Form extends Component {

  state = {
    value: ""
  };

  handleChange = (evt) => {
    // Grab the value from the HTML element.
    const { value } = evt.target;
    // Update the state of the input.
    this.setState({ value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    axios.get(`https://api.github.com/search/users?per_page=42&page=1&q=${this.state.value}`)
    .then((result) => {
      this.props.addUser(result.data);
    })
    .catch((error) => {
      // we should display the error
      console.log(error)
    });

    this.setState({ value: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add user."
            onChange={(evt) => this.handleChange(evt)}
            value={this.state.value}
          />
          <button className="btn btn-outline-secondary" type="submit">Add</button>
        </div>
      </form>
    )
  }
}

export default Form;
