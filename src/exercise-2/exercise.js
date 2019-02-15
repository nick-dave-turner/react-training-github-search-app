import React from "react";

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
/**** TASK 1 ****/
/* Convert App to a class type component */

/**** TASK 2 ****/
/* Add users state to App */

/**** TASK 3 ****/
/* Update state on load (componentDidMount) */

/**** TASK 5 ****/
/* Update state to contain new user when clicking button */

const App = () => {
  return (
    <div className="container">
      <CardList users={MOCK_DATA} />

      {/**** TASK 4 ****/}
      {/* Add a add user button */}
    </div>
  )
};

export default App;