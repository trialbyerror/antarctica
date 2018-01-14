import React, { Component } from 'react';
import './Eventimages.css';
import OurMap from './map.jpg';

class Eventimages extends Component {
  render() {
    return (
      <div className="Overlaymap">
      <h1 align="left" className="App-title">Header</h1>
      <img src={OurMap} className="Eventimages-map" alt="map" />
      </div>
    );
  }
}

export default Eventimages;
