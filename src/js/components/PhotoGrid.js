import React from "react";

export default class PhotoGrid extends React.Component {
  constructor() {
    super();
    this.state = {
      isMounted: false
    };
  }

  componentDidMount() {
    this.setState({
      isMounted: true
    });
  }

  render() {
    let photos = [];
    if (this.state.isMounded) {
      console.log("isMounted");
    } else {
      console.log("isNotMounted");
    }
    return (
      <div>
        {photos}
      </div>
    );
  }
}
