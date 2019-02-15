import React, { Component } from "react";
import axios from "axios";

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
    <div className="col-md-2 mt-2 mb-2">
      <div className="card h-100">
        <a href={ props.html_url }>
          <img className="card-img-top" src={ props.avatar_url } alt={ props.login } />
          <div className="card-body">
            <h6 className="card-title">{ props.login }</h6>
          </div>
        </a>

        <button type="button"
                className="btn btn-outline-secondary deleteButton"
                style={styles.deleteButton}
                onClick={() => props.deleteUser(props.id)}>delete</button>
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
          return (
            <Card
              key={user.id}
              {...user}
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