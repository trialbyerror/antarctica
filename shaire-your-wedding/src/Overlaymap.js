import React, { Component } from 'react';
import './Overlaymap.css';
import OurMap from './map.jpg';

class Overlaymap extends Component {
  render() {
    return (
      <div className="Overlaymap">
        <h1 className="Overlaymap-title">
        Header
        </h1>
        <img src={OurMap} className="Overlaymap-map" alt="Map" />
        <h2 align="center" className="Overlaymap-discription">
        This is a discription such as what will be on our map in the end
        </h2>
      </div>
    );
  }
}

export default Overlaymap;
