import React, { Component } from "react";

import CardList from "./CardList/CardList";
import Form from "./Form/Form";

// Root component.
class App extends Component {

  state = {
    users: []
  };

  handleAddUser = (data) => {
    // Updates the state to add new user.
    this.setState({ users: data.items });
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