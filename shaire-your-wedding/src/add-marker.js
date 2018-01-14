import React, {Component} from 'react';

export class AddMarker extends Component {

    constructor(props) {
      super(props);
      this.makeMarker = this.makeMarker.bind(this);
    }

    makeMarker() {
      const locn = this.props.locn;
      const title = this.props.title;
      const target = this.props.toMake;
      const aMarker = {
        lat: locn.lat,
        lon: locn.lon,
        title: title
      }
      target(aMarker);
    }

    render() {
      return (<button onClick={this.makeMarker}>{"Add a new marker"}</button>);
    }

}
