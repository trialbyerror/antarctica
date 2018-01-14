import React, { Component } from 'react';
import './Overlaymap.css';
import OurMap from './map.jpg';

class Overlaymap extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="Overlaymap">
        <h1 className="Overlaymap-title">
        {this.props.name}
        </h1>
        <img src={OurMap} className="Overlaymap-map" alt="Map" />
        <h2 align="center" className="Overlaymap-discription">
          {this.props.description}
         </h2>
      </div>
    );
  }
}

export default Overlaymap;
