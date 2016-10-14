import React from "react";
import Header from "./components/header/Header";
import PhotoGrid from "./components/PhotoGrid";

export default class Layout extends React.Component {

  constructor() {
    super();
    this.state = {
      photosData: []
    };
  }

  handleSearchRequest(searchValue) {
    const devApiKey = "f7b187b2ffaf8273ce3b09965fb72b7a";
    let url = `https://api.flickr.com/services/rest/?api_key=${devApiKey}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=50&page=1&text=${searchValue}`;

    this.setState({
      isRequestingPhotos: true
    });

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          isRequestingPhotos: false,
          photosData: data.photos.photo
        });
      })
      .catch(error => {
        throw error;
      });
  }

  render() {
    return (
      <div>
        <Header
          handleSearchRequest={this.handleSearchRequest.bind(this)}
          isRequestingPhotos={this.state.isRequestingPhotos}
        />
        <PhotoGrid photosData={this.state.photosData}/>
      </div>
    );
  }
}
