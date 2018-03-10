import React from "react";
import Post from "./Post";
import { posts } from "./api";

// All the posts for the currently selected user
export default class Posts extends React.Component {
  state = { posts: [] };

  async componentDidMount() {
    this.setState({ posts: await posts(this.props.user.id) });
  }

  render() {
    return this.state.posts.map(post => <Post key={post.id} post={post} />);
  }
}
