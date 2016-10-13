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
        onSubmit={this.filter.bind(this)}
      >
        <input
          value={this.state.value}
          onChange={this.updateSearchValue.bind(this)}
        />
        <button>Search</button>
      </form>
    );
  }
}
