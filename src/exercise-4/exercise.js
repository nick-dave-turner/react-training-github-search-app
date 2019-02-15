import React, { Component } from "react";
import axios from "axios";
import uid from "uid";

const MOCK_DATA = [
  { id: 1, name: "Brigida Coughlin" },
  { id: 2, name: "Cleotilde Hahn" },
  { id: 3, name: "Barney Delawder" },
  { id: 4, name: "Dara Hennemann" },
  { id: 5, name: "Keri Hogsett" },
  { id: 6, name: "Soila Farley" },
  { id: 7, name: "Dona Henault" },
  { id: 8, name: "Susan Juarez" },
  { id: 9, name: "Janee Scoggins" },
  { id: 10, name: "Claire Tellez" }
];

// Example styling.
const styles = {
  text: {
    margin: 0,
  },
  deleteButton: {
    marginTop: 10
  }
};

// Card component.
const Card = (props) => {
  return (
    <div className="col-md-4 mt-2 mb-2">
      <div className="card">
        <div className="card-body">

          {/**** TASK 5 ****/}
          {/* Update HTML to work with API data */}

          <p style={styles.text}>Name: {props.name}</p>

          <button type="button"
                  className="btn btn-outline-secondary deleteButton"
                  style={styles.deleteButton}
                  onClick={() => props.deleteUser(props.id)}>delete</button>
        </div>
      </div>
    </div>
  )
};

// CardList component.
const CardList = (props) => {
  return (
    <div className="row">
      {
        // Looping through data using .map()
        props.users.map(user => {

          /**** TASK 4 ****/
          /* Spread props of API data */

          return (
            <Card
              key={user.id}
              id={user.id}
              name={user.name}
              deleteUser={(id) => props.deleteUser(id)}
            />
          );
        })
      }
    </div>
  )
};

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

  /**** TASK 2 ****/
  /* Replace mock data with data from an API. */
  /* https://api.github.com/search/users?per_page=42&page=1&q=USER */

  handleSubmit = (evt) => {
    // Stop the form refreshing the page
    evt.preventDefault();
    // Call addUser in the parent component passing the value of input.
    this.props.addUser(this.state.value);
    // Reset input value back to empty.
    this.setState({ value: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add user"
            onChange={(evt) => this.handleChange(evt)}
            value={this.state.value}
          />
          <button className="btn btn-outline-secondary" type="submit">Add</button>
        </div>
      </form>
    )
  }
}

// Root component.
class App extends Component {

  state = {
    users: []
  };

  /**** TASK 1 ****/
  /* Remove MOCK_DATA */
  componentDidMount() {
    // Set the initial state of the component when it loads in browser.
    this.setState({ users: MOCK_DATA });
  }

  /**** TASK 3 ****/
  /* Update setState to set data returned from API */
  handleAddUser = (name) => {
    // Updates the state to add new user.
    this.setState(prevState => {
      return {
        users: [
          ...prevState.users,
          {
            id: uid(10), // Generate unique ID
            name: name
          }
        ]
      }
    });
  };

  handleDeleteUser = (id) => {
    // Filter out user selected to be deleted.
    const users = this.state.users.filter(user => user.id !== id);
    // Update the state to all users minus the user filtered out.
    this.setState({ users });
  };

  render() {
    return (
      <div className="container">
        <Form addUser={this.handleAddUser} />
        <CardList users={this.state.users} deleteUser={this.handleDeleteUser} />
      </div>
    )
  }
}

export default App;