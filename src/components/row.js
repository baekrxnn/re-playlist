import React, { Component } from 'react';
import Info from './info.js';

export default class Row extends Component {
  render() {
    console.log("hihi "+this.props.video);
    console.log("hihi "+this.props.title);

    return (
      <div className="divy">
        <iframe width="200" height="140" src={this.props.video}> </iframe>
        <p className="col"> {this.props.title} </p>
        <p className="col"> {this.props.artist} </p>

      </div>

    )
  }
}