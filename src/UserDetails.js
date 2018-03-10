import React from "react";
import Card from "./Card";

// User details component
// Render the JSON nicely
const UserDetails = ({ user }) => (
  <Card style={{ marginTop: "1rem" }}>
    <div
      style={{
        padding: "1rem",
        fontFamily: "'Courier New', Courier, monospace",
        wordBreak: "break-all",
        whiteSpace: "pre"
      }}
    >
      {user &&
        JSON.stringify(user, null, 2)
          .split("\n")
          .map((line, index) => <div key={index}>{line}</div>)}
    </div>
  </Card>
);

export default UserDetails;
