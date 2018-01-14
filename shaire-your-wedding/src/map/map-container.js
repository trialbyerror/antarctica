import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Modal from 'react-responsive-modal';
import {DetailedMarker} from './detailed-marker';
import {CustomMarker} from './custom-marker';
import Overlaymap from '../Overlaymap.js';

let componentToRender;

export class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selectedPlace: { name: "Hello" },
      currentTitle: "",
      markerLatLons: [
        { lat: 45.137386, lon: -76.147526, name: "Wedding Cake",
        image: "weddingcake.jpg", title: "I'm a pretty cake!" },
        { lat: 45.137248, lon: -76.147644, name: "Lawn Games",
        image: "weddingcake.jpg", title: "I'm a lawn game!" },
        { lat: 45.137193, lon: -76.147440 , name: "Photo Booth",
        image: "weddingcake.jpg", title: "I'm a photo booth!" }
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
    this.handleChange = this.handleChange.bind(this);
   }

   handleChange(e) {
     const name = e.title;
     this.props.showModal(e);
   }


  renderAllMarkers() {
    const {open} = this.state;
    return this.state.markerLatLons.map( (blah, index) => {
      const locnLat = blah.lat;
      const locnLng = blah.lon;
      return(
      <Marker onClick={this.handleChange}
        position={{ lat: locnLat, lng: locnLng }}
        name={blah.name}
        title={blah.title}/>
      ); });
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
      width: '65vw',
      height: '65vh',
      padding: '30px'
    };
    const {open} = this.state;
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
