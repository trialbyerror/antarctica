import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class DetailedMarker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<Marker onClick={this.props.onClick}
                    position={{lat: this.props.lat, lng: this.props.lng}}
                    title={this.props.title} />
                );
  }
}
