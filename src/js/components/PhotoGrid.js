import React from "react";

export default function PhotoGrid ({ photosData }) {

  let photos = photosData.map(photo => {
    let src = "https://www.pexels.com/photo/12345";
    return (
      <div
        className="photo-grid__photo-container"
        key={photo.id}
      >
        <a href={src} target="_blank">
          <img
            className="photo"
            src={src}
            alt={photo.title}
          />
        </a>
      </div>
    );
  });

  return (
    <div className="photo-grid">
        {photos}
    </div>
  );
}
