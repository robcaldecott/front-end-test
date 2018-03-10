import React from "react";
import Card from "./Card";
import ToggleIcon from "./ToggleIcon";
import Comment from "./Comment";
import Multiline from "./Multiline";
import { comments } from "./api";

// Posts that load comments when expanded
export default class Post extends React.Component {
  state = { expanded: false, comments: [] };

  onToggle = () => {
    this.setState(
      state => ({ expanded: !state.expanded }),
      async () => {
        if (this.state.expanded && this.state.comments.length === 0) {
          // Fetch all comments for this post
          this.setState({ comments: await comments(this.props.post.id) });
        }
      }
    );
  };

  render() {
    const { post } = this.props;
    const { expanded, comments } = this.state;
    return (
      <Card style={{ marginTop: "1rem", position: "relative" }}>
        <ToggleIcon expanded={expanded} />

        <a className="mdc-card__primary-action" onClick={this.onToggle}>
          <div style={{ padding: "1rem" }}>
            <h2 className="mdc-typography--title">{post.title}</h2>
            <Multiline>{post.body}</Multiline>
          </div>

          {expanded &&
            comments.map(comment => (
              <Comment key={comment.id} comment={comment} />
            ))}
        </a>
      </Card>
    );
  }
}
