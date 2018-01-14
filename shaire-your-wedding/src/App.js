import React, { Component } from 'react';
import flowers from './TopRightCorner.jpg';
import backdrop from './old-wood-board-texture.jpg'
import './App.css';
import Overlaymap from './Overlaymap.js';
import Eventimages from './Eventimages.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img align="right" src={flowers} className="App-flowers" alt="Flowers" />
          <h1 align="left" className="App-title">Shaire Our Wedding!</h1>
        </header>
        <p className="App-intro">
            <div className="App-backdrop" align="center">
                <div className="App-map">
                  <Overlaymap />
                </div>
            </div>
        </p>
      </div>
    );
  }
}

export default App;
 // <img src={backdrop} className="App-backdrop" alt="White Wood"/>
