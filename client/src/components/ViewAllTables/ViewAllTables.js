import React, { useState } from "react";
import { Container, Jumbotron, Form, Button, Row, Col, Modal, Table } from "react-bootstrap";
import "./ViewAllTables.css";


// this function is for the table order details modal
function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                   All Table 1 Orders
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="card-text"><small className="text-muted"><strong>Order Details</strong></small></p>
                <Table responsive className="tableBlackGround" size="sm" striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Menu Item</th>
                            <th>Allergy Category</th>
                            <th>Requests & Allergy Specifics</th>
                            <th>Order Label</th>
                            <th>Course#</th>
                            <th className="deleteFont">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Bibimbap</td>
                            <td>Egg</td>
                            <td>Hold the Eggs + Sesame Seeds.</td>
                            <td>Bob</td>
                            <td className="centeredCourseNumber">1</td>
                            <td className="removeRow"><strong>x</strong></td>
                        </tr>
                        <tr>
                            <td>Bulgogi</td>
                            <td>N/A</td>
                            <td>Make Extra spicy!</td>
                            <td>Met's Hat Guy</td>
                            <td className="centeredCourseNumber">1</td>
                            <td className="removeRow"><strong>x</strong></td>
                        </tr>
                        <tr>
                            <td>Kimchi-Jjigae</td>
                            <td>Shellfish</td>
                            <td>No Seafood or Fish Sauce.</td>
                            <td>Seat 3</td>
                            <td className="centeredCourseNumber">2</td>
                            <td className="removeRow"><strong>x</strong></td>
                        </tr>
                    </tbody>
                </Table>

                <p className="card-text"><small className="text-muted"><strong></strong></small></p>



            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" size="sm" className="tableViewButtons" onClick={props.onHide}>+Add New Order Item </Button>
            </Modal.Footer>
        </Modal>
    );
}

//this is for the delete confirmation modal
function MySmallerVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete Entire Table
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Are You Sure?</h5>
          <hr></hr>
          <p className="card-text"><small className="text-muted"><strong>Deleting this entire table will remove it from your available tables. You will need to re-create it for future guests. Alternatively, you can clear orders individually within the "View Details" section of this table.</strong></small></p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="deleteTableButtons" size="sm" variant="outline-danger" onClick={props.onHide}>Delete Table</Button>
        </Modal.Footer>
      </Modal>
    );
  }


function ViewAllTablesComp() {

    const [modalShow, setModalShow] = React.useState(false);

    const [smallermodalShow, setSmallerModalShow] = React.useState(false);

    return (


        <>
            <Container className="vertical-center">

                <br />
                <br />
                
                <Jumbotron className="jumbotronTableView">
                    <h2 className="text-center responsiveH2Font">Table 1</h2>
                    <hr style={{ height: '4px' }} />

                    <Form>

                        <Row>
                            <Col xs={9}>
                                <Button variant="outline-dark" className="my-2 my-lg-0 formControl view tableViewButtons" size="sm" variant="dark" onClick={() => setModalShow(true)} block>View Details</Button>

                                <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)} />
                            </Col>

                            <Col xs={3}>
                                <Button variant="outline-danger" className="my-2 my-lg-0 formControl view deleteTableButtons" onClick={() => setSmallerModalShow(true)} size="sm" block><strong>x</strong></Button>

                                <MySmallerVerticallyCenteredModal
                                    show={smallermodalShow}
                                    onHide={() => setSmallerModalShow(false)} />
                            </Col>
                        </Row>

                    </Form>

                </Jumbotron>
                

                <Jumbotron className="jumbotronTableView">
                    <h2 className="text-center responsiveH2Font">Table 2</h2>
                    <hr style={{ height: '4px' }} />

                    <Form>

                        <Row>
                            <Col xs={9}>
                                <Button variant="outline-dark" className="my-2 my-lg-0 formControl view tableViewButtons" size="sm" variant="dark" onClick={() => setModalShow(true)} block>View Details</Button>

                                <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)} />
                            </Col>

                            <Col xs={3}>
                            <Button variant="outline-danger" className="my-2 my-lg-0 formControl view deleteTableButtons" onClick={() => setSmallerModalShow(true)} size="sm" block><strong>x</strong></Button>

                            <MySmallerVerticallyCenteredModal
                                show={smallermodalShow}
                                onHide={() => setSmallerModalShow(false)} />
                            </Col>
                        </Row>

                    </Form>

                </Jumbotron>


                <Jumbotron className="jumbotronTableView">
                    <h2 className="text-center responsiveH2Font">Table 3</h2>
                    <hr style={{ height: '4px' }} />

                    <Form>

                        <Row>
                            <Col xs={9}>
                                <Button variant="outline-dark" className="my-2 my-lg-0 formControl view tableViewButtons" size="sm" variant="dark" onClick={() => setModalShow(true)} block>View Details</Button>

                                <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)} />
                            </Col>

                            <Col xs={3}>
                            <Button variant="outline-danger" className="my-2 my-lg-0 formControl view deleteTableButtons" onClick={() => setSmallerModalShow(true)} size="sm" block><strong>x</strong></Button>

                            <MySmallerVerticallyCenteredModal
                                show={smallermodalShow}
                                onHide={() => setSmallerModalShow(false)} />
                            </Col>
                        </Row>

                    </Form>

                </Jumbotron>


                <Jumbotron className="jumbotronTableView">
                    <h2 className="text-center responsiveH2Font">Table 4</h2>
                    <hr style={{ height: '4px' }} />

                    <Form>

                        <Row>
                            <Col xs={9}>
                                <Button variant="outline-dark" className="my-2 my-lg-0 formControl view tableViewButtons" size="sm" variant="dark" onClick={() => setModalShow(true)} block>View Details</Button>

                                <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)} />
                            </Col>

                            <Col xs={3}>
                            <Button variant="outline-danger" className="my-2 my-lg-0 formControl view deleteTableButtons" onClick={() => setSmallerModalShow(true)} size="sm" block><strong>x</strong></Button>

                            <MySmallerVerticallyCenteredModal
                                show={smallermodalShow}
                                onHide={() => setSmallerModalShow(false)} />
                            </Col>
                        </Row>

                    </Form>

                </Jumbotron>

            </Container>

            <br />
            <br />
            <br />


        </>


    );

};

export default ViewAllTablesComp;