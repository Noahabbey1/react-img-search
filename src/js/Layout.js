import React from "react";
import Header from "./components/header/Header";
import PhotoGrid from "./components/PhotoGrid";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <PhotoGrid />
      </div>
    );
  }
}
