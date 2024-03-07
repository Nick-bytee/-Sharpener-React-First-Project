import React from "react";
import { Container } from "react-bootstrap";
import "./User.css";

const User = ({ data }) => {
  const users = data;
  return (
    <Container className="user-container bg-light">
      <div>
        {users.length > 0 ? (
          users.map((user) => (
            <div className="user">
              <h3
                key={user.id}
              >{`${user.name}, (${user.age} years old), Studies At  ${user.college}`}</h3>
            </div>
          ))
        ) : (
          <h3>No Users Found</h3>
        )}
      </div>
    </Container>
  );
};

export default User;
