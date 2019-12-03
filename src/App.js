import React, { Component } from "react";

export default class App extends Component {
  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(resp => {
        return resp.json();
      })
      .then(json => {});
  }
  render() {
    return <div></div>;
  }
}
