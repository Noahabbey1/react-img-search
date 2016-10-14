import React from "react";
import SearchBar from "./SearchBar";

export default function Header ({ handleSearchRequest, isRequestingPhotos }) {
  return (
    <div className="header">
      <h1 className="header__title">
        FLICKR SEARCH!
      </h1>
      <SearchBar
        handleSearchRequest={handleSearchRequest}
        isRequestingPhotos={isRequestingPhotos}
      />
    </div>
  );
}
