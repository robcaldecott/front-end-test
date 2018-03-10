import React from "react";
import classnames from "classnames";
import Card from "./Card";

// Navigation is via this list of users
const Users = ({ users, selectedUser, onClick }) => (
  <Card>
    <ul className="mdc-list">
      {users.map(user => (
        <li
          key={user.id}
          className={classnames("mdc-list-item", {
            "mdc-list-item--activated":
              selectedUser && user.id === selectedUser.id
          })}
          style={{ cursor: "pointer" }}
          onClick={() => onClick(user)}
        >
          {user.name}
        </li>
      ))}
    </ul>
  </Card>
);

export default Users;
