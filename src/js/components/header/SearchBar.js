import React from "react";

export default class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  updateSearchValue(e) {
    e.preventDefault();
    clearTimeout(this.autoSearchDelay);

    this.setState({
      value: e.target.value
    });

    this.autoSearchDelay = setTimeout(
      this.filter.bind(this),
      700);
  }

  filter() {
    alert(this.state.value);
  }

  render() {
    const updateSearchValue = this.updateSearchValue.bind(this);
    const filter = this.filter.bind(this);

    return (
      <form onSubmit={filter}>
        <input value={this.state.value} onChange={updateSearchValue}/>
        <button>Search</button>
      </form>
    );
  }
}
