import React from 'react';

import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';

let orderFormStyles = {
  container: {
    backgroundColor: '#f1f1f1',
    paddingTop: '20px',
    paddingBottom: '20px',
    minHeight: '590px'
  },
  stepContainer: {
    overflow: 'hidden',
  }
}

const OrderSection = (props) => {
  const [step, setStep] = React.useState(0)
  const [amount, setAmount] = React.useState(1)
  const [direction, setDirection] = React.useState(null)

  function increaseAmount() {
    setAmount(amount+1)
  }

  function decreaseAmount() {
    setAmount(amount-1)
  }

  function nextStep() {
    setStep(step+1)
  }

  function previousStep() {
    if(step >= 1) setStep(step-1)
  }

  function handleSelect(selectedIndex, direction) {
    setStep(selectedIndex)
    setDirection(direction)
  }

  console.log("render")
  return (
    <Container fluid style={orderFormStyles.container}>
      <Row>
        <Col xs={12}>
          <Container>
            <Form autocomplete="on">
              <Row>
                <Col md={8}>
                  <Carousel
                    activeIndex={step}
                    controls={false}
                    direction={direction}
                    indicators={false}
                    interval={null}
                    keyboard={false}
                    onSelect={handleSelect}
                  >
                    <Carousel.Item>
                      <Row>
                        <Col xs={5} md={3}>
                          <Image src="/productImages/strawbox.jpg" roundedCircle thumbnail />
                        </Col>
                        <Col xs={6} md={9}>
                          <h3>Bamboo Straws</h3>
                          <p className="small"><em>This beautiful bamboo straw works with all kinds of drinks and are easily washable by hand and by machine.</em></p>
                          <Row>
                            <div className="col-lg-4 no-gutter">
                              <label htmlFor="amount-boxes"><small>Number of boxes (10 straws in each):</small></label>
                              <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                  <Button variant="outline-secondary" onClick={decreaseAmount}>-</Button>
                                </InputGroup.Prepend>
                                <FormControl
                                  placeholder="Number of boxes"
                                  aria-label="Number of boxes"
                                  aria-describedby="Enter the amount of boxes you want, 10 straws in each box."
                                  type="number"
                                  defaultValue={amount}
                                  id="amount-boxes"
                                />
                                <InputGroup.Append>
                                  <Button variant="outline-secondary" onClick={increaseAmount}>+</Button>
                                </InputGroup.Append>
                              </InputGroup>
                            </div>
                          </Row>
                        </Col>
                      </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                      <Row>
                        <Col md={12}>
                          <h3 className="text-underline">Shipping details</h3>
                        </Col>
                      </Row>
                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                          <Form.Label>Full name</Form.Label>
                          <Form.Control placeholder="Full name" />
                        </Form.Group>
                      </Form.Row>

                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" autocomplete="on" />
                        </Form.Group>
                      </Form.Row>

                      <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" autocomplete="on" />
                      </Form.Group>

                      <Form.Group controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" autocomplete="on" />
                      </Form.Group>

                      <Form.Row>
                        <Form.Group as={Col} controlId="formGridZip">
                          <Form.Label>Zip</Form.Label>
                          <Form.Control autocomplete="on" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCity">
                          <Form.Label>City</Form.Label>
                          <Form.Control autocomplete="on" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                          <Form.Label>State</Form.Label>
                          <Form.Control as="select">
                            <option>Choose...</option>
                            <option>...</option>
                          </Form.Control>
                        </Form.Group>

                        
                      </Form.Row>

                      <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                      </Form.Group>

                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Carousel.Item>
                  </Carousel>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Header>Summary</Card.Header>
                    <Card.Body>
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <div className="row align-items-center">
                            <div className="col-3 px-0">
                              <Image src="/productImages/strawbox.jpg" roundedCircle thumbnail />
                            </div>
                            <div className="col-5">
                              quantity: {amount} 
                            </div>
                            <div className="col-4 pr-0 justify-content-end d-flex">
                              á €9.99
                            </div>
                          </div>
                        </ListGroup.Item>
                        
                        <ListGroup.Item className="mb-4">
                          <div className="row">
                            <div className="col-6 px-0">Order Total:</div>
                            <div className="col-6 pr-0 justify-content-end d-flex">{amount * 9.99}</div>
                            
                          </div>
                          
                        </ListGroup.Item>
                      </ListGroup>
                      <div className="d-flex justify-content-between">
                        <Button variant="secondary" onClick={(e) => handleSelect(step - 1, 'prev')} disabled={step === 0 ? true : false}>Go back</Button>
                        <Button variant="primary" onClick={(e) => handleSelect(step + 1, 'next')}>Proceed to checkout</Button>

                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Form>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default OrderSection