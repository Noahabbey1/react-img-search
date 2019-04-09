import React from "react";
import SearchBar from "./SearchBar";

export default function Header ({ handleSearchRequest, isRequestingPhotos }) {
  return (
    <div className="header">
      <h1 className="header__title">
        PEXELS SEARCH!
      </h1>
      <SearchBar
        handleSearchRequest={handleSearchRequest}
        isRequestingPhotos={isRequestingPhotos}
      />
    </div>
  );
}
$.ajax({
  url: 'https://api.pexels.com/v1/search?query=example+query&per_page=20&page=1'
,
  method: "GET",
  headers: {
    Authorization: '563492ad6f917000010000019d49185904c64a929c81f162d12a17c5'
  },
}).then(function(response) {
  console.log(response);
}).catch(function(err) {
  console.error(err);
});

