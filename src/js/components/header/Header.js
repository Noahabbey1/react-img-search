import React from "react";
import SearchBar from "./SearchBar";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1 className="header__title">
          FLICKR SEARCH!
        </h1>
        <SearchBar
          handleSearchParams={this.props.handleSearchParams}
        />
      </div>
    );
  }
}
