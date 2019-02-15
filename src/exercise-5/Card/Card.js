import React from "react";

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

export default Card;