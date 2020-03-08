import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div>
        <Button variant="primary add" onClick={this.handleShow}>
          +
        </Button>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label>Title:</label>
                <input type="text" name="title" />
              </div>
              <div>
                <label>Image:</label>
                <input type="text" name="image" />
              </div>
              <div>
                <label>Rating:</label>
                <input type="text" name="rating" />
              </div>
              <div>
                <label>Year:</label>
                <input type="text" name="year" />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button variant="primary">Add Movie</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddModal;
