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
    const devApiKey = "563492ad6f917000010000019d49185904c64a929c81f162d12a17c5";
    let url = `https://api.pexels.com/v1/search?query=example+query&per_page=20&page=1`;

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
