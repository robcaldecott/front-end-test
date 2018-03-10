import React from "react";
import Multiline from "./Multiline";

// Render a post comment
const Comment = ({ comment }) => (
  <div style={{ padding: "0 1rem 0 1rem" }}>
    <hr className="mdc-list-divider" />
    <p className="mdc-typography--body2 ">
      {comment.name} (<span className="mdc-typography--caption">
        {comment.email}
      </span>)
    </p>
    <Multiline>{comment.body}</Multiline>
  </div>
);

export default Comment;
