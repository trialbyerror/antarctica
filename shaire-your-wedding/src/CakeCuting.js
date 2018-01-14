import React, { Component } from 'react';
import './Overlaymap.css';
import weddingcake from './weddingcake.jpg';

class Weddingcake extends Component {
  render() {
    return (
      <div className="Overlaymap">
        <h1 className="Overlaymap-title">
        Cake Cutting
        </h1>
        <img src={weddingcake} className="Overlaymap-map" alt="Map" />
        <h2 align="center" className="Overlaymap-discription">
        At seven oclock we will cut the cake here
        </h2>
      </div>
    );
  }
}

export default Weddingcake;
