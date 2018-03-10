import React, { Fragment } from "react";
import Card from "./Card";
import ToggleIcon from "./ToggleIcon";
import Photos from "./Photos";
import { photos } from "./api";

// Render a photo album
export default class Album extends React.Component {
  state = { expanded: false, photos: [] };

  onToggle = () => {
    this.setState(
      state => ({ expanded: !state.expanded }),
      async () => {
        if (this.state.expanded && this.state.photos.length === 0) {
          // Load the photos for this album
          this.setState({ photos: await photos(this.props.album.id) });
        }
      }
    );
  };

  render() {
    const { album, thumbnails } = this.props;
    const { expanded, photos } = this.state;
    return (
      <Fragment>
        <Card style={{ marginTop: "1rem", position: "relative" }}>
          <ToggleIcon expanded={expanded} />
          <a className="mdc-card__primary-action" onClick={this.onToggle}>
            <div style={{ padding: "1rem" }}>{album.title}</div>
          </a>
        </Card>
        {expanded &&
          photos.length > 0 && (
            <Photos photos={photos} thumbnails={thumbnails} />
          )}
      </Fragment>
    );
  }
}
