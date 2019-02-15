import React from "react";

import Card from "../Card/Card";

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

export default CardList;