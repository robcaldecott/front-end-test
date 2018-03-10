import React from "react";
import Button from "./Button";
import Album from "./Album";
import { albums } from "./api";

// Render the Albums view
export default class Albums extends React.Component {
  state = { thumbnails: true, albums: [] };

  async componentDidMount() {
    this.setState({ albums: await albums(this.props.user.id) });
  }

  onThumbnails = () => this.setState({ thumbnails: true });
  onFullSize = () => this.setState({ thumbnails: false });

  render() {
    const { albums, thumbnails } = this.state;
    return (
      <div style={{ marginTop: "1rem" }}>
        <Button style={{ marginRight: "1rem" }} onClick={this.onThumbnails}>
          Thumbnails
        </Button>
        <Button onClick={this.onFullSize}>Full size</Button>

        {albums.map(album => (
          <Album key={album.id} album={album} thumbnails={thumbnails} />
        ))}
      </div>
    );
  }
}
