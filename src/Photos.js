import React from "react";

// Render a photo grid
const Photos = ({ photos, thumbnails }) => (
  <div className="mdc-grid-list" style={{ marginTop: "1rem" }}>
    <ul className="mdc-grid-list__tiles">
      {photos.map(photo => (
        <li
          key={photo.id}
          className="mdc-grid-tile"
          style={{ width: thumbnails ? undefined : "100%" }}
        >
          <div className="mdc-grid-tile__primary">
            <img
              className="mdc-grid-tile__primary-content"
              src={thumbnails ? photo.thumbnailUrl : photo.url}
              alt={photo.title}
            />
          </div>
          <span className="mdc-grid-tile__secondary">
            <span className="mdc-grid-tile__title">{photo.title}</span>
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default Photos;
