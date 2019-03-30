import React from 'react'
import { connect } from 'react-redux'
import { toggleModal } from '../../redux/actions/ui/uiActions'

// Bootstrap
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';

class StrawModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.toggleModal()
  }

  render() {
    return (
      <>
        <Modal size="lg" show={this.props.ui.modalOpen} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Order some bamboo straws</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row>
                <Col xs={5} md={2}>
                  <Image src="/productImages/strawbox.jpg" roundedCircle thumbnail />
                </Col>
                <Col xs={6} md={8}>
                  <h3>Bamboo Straws</h3>
                  <p className="small"><em>This beautiful bamboo straw works with all kinds of drinks and are easily washable by hand and by machine.</em></p>
                </Col>
                <Col xs={1} md={1}>
                  <button type="button" class="close">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">Close</span>
                  </button>
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={2}></Col>
                <Col xs={6} md={3}>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Number of boxes:</Form.Label>
                    <Form.Control as="select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ui: state.ui
})

export default connect(
mapStateToProps,
{
  toggleModal
}
)(StrawModal)