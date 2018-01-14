import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Modal from 'react-responsive-modal';

export class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPlace: { name: "Hello" }
    }
  }

  render() {

    const style = {
      width: '100vw',
      height: '100vh'
    };

    return (
      <div>
      <Map google={this.props.google}
          style={style}
          initialCenter={{
            lat: 45.137322,
            lng: -76.147552
          }}
          zoom={20}
          onClick={this.onMapClicked}>

        <Marker onClick={this.props.openModal}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBmacdlQ1w9Ep4MY-mQpAxYkQWp8kMbvb8"
})(MapContainer)
