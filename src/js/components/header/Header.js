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
$.ajax({
  url: 'https://api.pexels.com/v1/search?query=example+query&per_page=15&page=1'
,
  method: "GET",
  headers: {
    "Authorization":
       YOUR_API_KEY
  },
}).then(function(response) {
  console.log(response);
}).catch(function(err) {
  console.error(err);
});

