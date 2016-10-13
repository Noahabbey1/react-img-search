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

  handleSearchParams(value) {
    console.log(value);
  }

  render() {
    return (
      <div>
        <Header
          handleSearchParams = {this.handleSearchParams.bind(this)}
        />
        <PhotoGrid
          photosData = {this.state.photosData}
        />
      </div>
    );
  }
}
