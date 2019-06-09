import React from 'react'

// Bootstrap
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';

const StrawModal = ({open}) => {
  const [modalOpen, setModalOpen] = React.useState(open)

  function toggleModal() {
    setModalOpen(!modalOpen)
  }

  return (
    <>
      <Modal size="lg" show={modalOpen} onHide={toggleModal}>
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
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
          <Button variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default StrawModal