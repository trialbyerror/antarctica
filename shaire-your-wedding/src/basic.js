import React from 'react';
import MapContainer from './map/map-container.js';
import Modal from 'react-responsive-modal';

export default class Basic extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ open: true });
  }

  hideModal = () => {
    this.setState({ open: false });
  }

  render() {
    const {open} = this.state;
    return (
      <div>
        <Modal open={open} onClose={this.hideModal} little>
            <h2>Simple centered modal</h2>
        </Modal>
       <MapContainer openModal={this.showModal}/>
       </div>
      );
  }
}
