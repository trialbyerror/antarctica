import React, { Component } from 'react';
import flowers from './TopRightCorner.png';
import bottomflowers from './BottomLeft.png';
import backdrop from './old-wood-board-texture.jpg'
import './App.css';
import Overlaymap from './Overlaymap.js';
import Weddingcake from './Weddingcake.js';
import Lawngames from './lawngames.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img align="right" src={flowers} className="App-flowers" alt="Flowers" />
        <header className="App-header">
          <h1 align="left" className="App-title">Shaire Our Wedding!</h1>
        </header>
        <p className="App-intro">
            <div className="App-map" align="center">
                <div className="App-map">
                  <Lawngames />
                </div>
            </div>
        </p>
      </div>
    );
  }
}

export default App;
 // <img src={backdrop} className="App-backdrop" alt="White Wood"/>
