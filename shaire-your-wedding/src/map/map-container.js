import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Modal from 'react-responsive-modal';
import {DetailedMarker} from './detailed-marker';
import {CustomMarker} from './custom-marker';

export class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPlace: { name: "Hello" },
      markerLatLons: [
        { lat: 45.137386, lon: -76.147526, title: "Ceremony" },
        { lat: 45.137248, lon: -76.147644, title: "Dinner Service" },
        { lat: 45.137193, lon: -76.147440 , title: "Photo Booth" }
        /*<Marker onClick={this.props.openModal}
          position={{ lat: 45.137248, lng: -76.147644 }}
          name={'APlace'} />,
          <Marker onClick={this.props.openModal}
            position={{ lat: 45.137193, lng: -76.147440}}
            name={'APlace'} />*/
      ]
    }
    this.renderAllMarkers = this.renderAllMarkers.bind(this);
    this.createNewMarker = this.createNewMarker.bind(this);
  }

  renderAllMarkers() {
    return this.state.markerLatLons.map( (blah, index) => {
      const locnLat = blah.lat;
      const locnLng = blah.lon;
      return <Marker onClick={this.props.openModal}
        position={{ lat: locnLat, lng: locnLng }}
        name={blah.title}
        title={blah.title}/> });
        /*
        return ([
          <Marker onClick={this.props.openModal}
            position={{ lat: 45.137248, lng: -76.147644 }}
            name={'APlace'} />,
            <Marker onClick={this.props.openModal}
              position={{ lat: 45.137193, lng: -76.147440}}
              name={'APlace'} />
        ])
        return this.state.markerLatLons.map( (blah, index) => {
          const locnLat = blah.lat;
          const locnLng = blah.lon;
          <Marker onClick={this.props.openModal}
            position={{ lat: locnLat, lng: locnLng }}
            name={'Dolores park'}/> });
        */
  }

  createNewMarker(markerLatLon) {
    this.setState({
      markerLatLons: [markerLatLon, ...this.state.markerLatLons]
    });
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


              {this.renderAllMarkers()}

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

/*

<Marker onClick={this.props.openModal}
      name={'Current location'} />
*/
