import React, { useState, useEffect } from "react";
import { Container, Jumbotron, Form, Button, Row, Col, Modal, Table } from "react-bootstrap";
import "./ViewAllTables.css";
import API from "../../utils/API";


function ViewAllTablesComp() {
    
    useEffect(() => {
        loadItems()
    }, [])

    // Loads all order items and sets the order items
    function loadItems() {
        API.getOrders()
            .then(res =>
                setItems(res.data)
            )
            .catch(err => console.log(err));
    };

    // --- below will be used later --- //
    // item.label, item.item, item.extra_notes, item.allergies, item.course

      // for(var i = 0; i < items.length; i++){
    
    // var tables = items.filter(item => {
    //     return item.table === i
    // }).map(item => {
    //     return [item.table];
    // });
    // console.log(tables)
    
    
    // } 

    const [items, setItems] = useState([]);
    
    var allTables = items.reduce((tables, item) => {
        if(tables.includes(item.table)){
            allTables.push(item.table)
        }
        return allTables
    }, [])
    console.log(allTables)

  

    // Not being used yet // 
    const [modalTable, setModalTable] = useState([]);
    const [modalLabel, setModalLabel] = useState([]);
    const [modalItem, setModalItem] = useState([]);
    const [modalNotes, setModalNotes] = useState([]);
    const [modalAllergies, setModalAllergies] = useState([]);
    const [modalCourse, setModalCourse] = useState([]);
    // Not being used yet //


    const [modalShow, setModalShow] = React.useState(false);

    const [smallermodalShow, setSmallerModalShow] = React.useState(false);

    return (


        <>
            <Container className="vertical-center">

                <br />
                <br />
                
                {/* {allTables.map(item =>    */}
                
                <Jumbotron className="jumbotronTableView">
                    <h2 className="text-center responsiveH2Font">Table</h2>
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
                                <Button variant="outline-danger" className="my-2 my-lg-0 formControl view deleteTableButtons" 
                                size="sm" block onClick={() => {
                                    setModalTable(item[0])
                                    setModalLabel(item[1])
                                    setModalItem(item[2])
                                    setModalNotes(item[3])
                                    setModalAllergies(item[4])
                                    setModalCourse(item[5])
                                    
                                
                                    setSmallerModalShow(true)
                                }} >
                                
                                <strong>x</strong></Button>

                                <MySmallerVerticallyCenteredModal
                                    show={smallermodalShow}
                                    onHide={() => setSmallerModalShow(false)} />
                            </Col>
                        </Row>

                    </Form>

                </Jumbotron>
            {/* )} */}
            </Container>

            <br />
            <br />
            <br />


        </>


    );


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
                       All Table {modalTable} Orders
              </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="card-text"><small className="text-muted"><strong>Order Details</strong></small></p>
                    <Table responsive className="tableBlackGround" size="sm" striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Item</th>
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
    

};

export default ViewAllTablesComp;