import React, { Component } from 'react';
import './Overlaymap.css';
import lawngames from './Lawngames.jpg';

class Lawngames extends Component {
  render() {
    return (
      <div className="Overlaymap">
        <h1 className="Overlaymap-title">
        Lawn Games
        </h1>
        <img src={lawngames} className="Overlaymap-map" alt="Map" />
        <h2 align="center" className="Overlaymap-discription">
        Various lawn games to play with your friends and family
        </h2>
      </div>
    );
  }
}

export default Lawngames;
