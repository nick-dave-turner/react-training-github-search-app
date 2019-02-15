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

// Card component.
const Card = (props) => {
  return (
    <p>Name: {props.name}</p>
  )
};

// CardList component.
const CardList = (props) => {
  return (
    <div>
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
const App = () => {
  return (
    <div>
      <CardList users={MOCK_DATA} />
    </div>
  )
};

export default App;