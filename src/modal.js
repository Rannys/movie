import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { uuid } from 'uuidv4';

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
  handleChange =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
            });
    }
  render() {
    return (
      <div>
        <Button className='add' variant="primary add" onClick={this.handleShow}>
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
                <input type="text" name='title'  onChange={this.handleChange}/>
              </div>
              <div>
                <label>Image:</label>
                <input type="text" name='imgUrl' onChange={this.handleChange} />
              </div>
              <div>
                <label>Rating:</label>
                <input type="text" name='rating' onChange={this.handleChange} />
              </div>
              <div>
                <label>Year:</label>
                <input type="text" name="year" onChange={this.handleChange} />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button  onClick = {()=>{
              this.props.add({...this.state, id : uuid()})
              this.setState({show : false})
              }} variant="primary">Add Movie</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddModal;
