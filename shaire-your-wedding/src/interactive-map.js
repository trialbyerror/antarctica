import React, {Component} from 'react';
import Basic from './basic';
import AddMarker from './add-marker'

class InteractiveMap extends Component {
  constructor(props){
    super(props);
  }

  handleMapClick(latLng) {
    alert(latLng.lat());
  }

  const myMap = React.render(<Basic mapHandler={this.handleMapClick}/>);

  render() {
    return (
      <div>
        {myMap}
        <AddMarker />
      </div>
    );
  }
}
