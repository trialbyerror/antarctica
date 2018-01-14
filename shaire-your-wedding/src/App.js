import React, { Component } from 'react';
import flowers from './TopRightCorner.png';
import bottomflowers from './BottomLeft.png';
import backdrop from './old-wood-board-texture.jpg';
import './App.css';
import Overlaymap from './Overlaymap.js';
import Eventimages from './Eventimages.js';
import Basic from './basic';
import MapContainer from './map/map-container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img align="right" src={flowers} className="App-flowers" alt="Flowers" />
        <header className="App-header">
          <h1 align="left" className="App-title">Shaire Our Wedding!</h1>
        </header>
        <div className="App-intro">
            <div className="App-map" align="center">
                  <Basic />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
 // <img src={backdrop} className="App-backdrop" alt="White Wood"/>
