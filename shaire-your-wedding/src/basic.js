import React from 'react';
import MapContainer from './map/map-container.js';
import Modal from 'react-responsive-modal';
import Overlaymap from './Overlaymap.js';

export default class Basic extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, name: "", desc: "", img: "" };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal(marker) {
    this.setState({ open: true, name: marker.name,
    desc: marker.title, img: marker.image });
  }

  hideModal = () => {
    this.setState({ open: false });
  }

  render() {
    const {open} = this.state;
    return (
      <div>
        <Modal open={open} onClose={this.hideModal} little>
            <Overlaymap name={this.state.name}
              description={this.state.desc}/>
        </Modal>
       <MapContainer showModal={this.showModal}/>
       </div>
      );
  }
}
