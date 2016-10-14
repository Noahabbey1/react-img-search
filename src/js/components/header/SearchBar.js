import React from "react";

export default class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  updateSearchValue(e) {
    clearTimeout(this.autoSearchDelay);

    this.setState({
      value: e.target.value
    });

    this.autoSearchDelay = setTimeout(
      this.filter.bind(this),
      700);
  }

  filter(e) {
    if (e) {
      e.preventDefault();
    }

    clearTimeout(this.autoSearchDelay);
    this.props.handleSearchParams(this.state.value);
  }

  render() {
    return (
      <form
        className="search-bar"
        onSubmit={this.filter.bind(this)}
      >
        <input
          className="search-bar__input"
          placeholder="Insert your keywords here!"
          value={this.state.value}
          onChange={this.updateSearchValue.bind(this)}
        />
        <button className="search-bar__button">
          Search
        </button>
      </form>
    );
  }
}
