import React, {Component} from 'react';

const __GAPI_KEY__ = "AIzaSyBmacdlQ1w9Ep4MY-mQpAxYkQWp8kMbvb8";

export class Container extends Component {
  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    };

    if (!this.props.loaded) {
      return (<div style={style}>
                <Map google={this.props.google} />
              </div>);
    }
    return (
      <div>Map will go here</div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: __GAPI_KEY__
})(Container)
