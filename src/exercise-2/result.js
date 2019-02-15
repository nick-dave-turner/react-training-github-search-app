import React, { Component } from "react";
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
  }
};

// Card component.
const Card = (props) => {
  return (
    <div className="col-md-4 mt-2 mb-2">
      <div className="card">
        <div className="card-body">
          <p style={styles.text}>Name: {props.name}</p>
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
          return <Card name={user.name} key={user.id} />
        })
      }
    </div>
  )
};

// Root component.
class App extends Component {

  state = {
    users: []
  };

  componentDidMount() {
    // Set the initial state of the component when it loads in browser.
    this.setState({ users: MOCK_DATA });
  }

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

  render() {
    return (
      <div className="container">
        <CardList users={this.state.users} />

        <button type="button"
                className="btn btn-outline-secondary"
                onClick={() => this.handleAddUser("Nick Turner")}>Add User</button>
      </div>
    )
  }
}

export default App;