import React, { useState, useEffect } from "react";
import { Container, Jumbotron, Form, Button, Row, Col, Modal, Table, CardDeck } from "react-bootstrap";
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

    

    const [items, setItems] = useState([]);

    //FILTER MAP METHOD
    const filteredOrders = function (tableNumb) {
       
    
            var tables = items.filter(item => {
                return item.table === tableNumb
            }).map(item => {
                return {table: item.table, label: item.label, order: item.order, notes: item.extra_notes, allergies: item.allergies, course: item.course};
            });
            console.log(tables, "filtered")
            return(tables)
            
            
    }

    
    
    //REDUCE METHOD

    const allTables = items.map(item => {
            return [item.table];
        });
    console.log(allTables, "allTables")
        

    const reducedTables = allTables.reduce((tableNumbs, table) => {
        
        if(!tableNumbs.includes(table[0])){
            
            tableNumbs.push(table[0])
            
        }
        
        return tableNumbs

    }, [])
    console.log(reducedTables, "reducedTables")

    const [modalTable, setModalTable] = useState([]);
    

    const [modalShow, setModalShow] = React.useState(false);

    const [smallermodalShow, setSmallerModalShow] = React.useState(false);

    return (


        <>
            <Container>

                <br />
                <br />

                <div className="flexWrap">
                    
               
                
                {reducedTables.map(tableNumb =>   
                
                <Jumbotron className="jumbotronTableView">
                    <h2 className="text-center responsiveH2Font">Table {tableNumb}</h2>
                    <hr style={{ height: '4px' }} />

                    <Form>

                        <Row>
                            <Col xs={9}>
                                <Button variant="outline-dark" className="my-2 my-lg-0 formControl view tableViewButtons" size="sm" variant="dark" onClick={() => {
                                 setModalTable(tableNumb)
                                 setModalShow(true)
                                 
                                 }} block>View Details</Button>

                                
                            </Col>

                            <Col xs={3}>
                                <Button variant="outline-danger" className="my-2 my-lg-0 formControl view deleteTableButtons" 
                                size="sm" block onClick={() => {
                                    
                                    setSmallerModalShow(true)
                                }} >
                                
                                <strong>x</strong></Button>

                                
                            </Col>
                        </Row>

                    </Form>

                </Jumbotron>
              
             )}

            <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)} />

            <MySmallerVerticallyCenteredModal
            show={smallermodalShow}
            onHide={() => setSmallerModalShow(false)} />
            
            </div>

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
                        {reducedTables.map(item => { 
                        const table = filteredOrders(item); 
                        return table.map(order  => { if (order.table === modalTable) 
                        return  <tr>
                                <td>{order.order}</td>
                                <td>{order.allergies}</td>
                                <td>{order.notes}</td>
                                <td>{order.label}</td>
                        <td className="centeredCourseNumber">{order.course}</td>
                                <td className="removeRow"><strong>x</strong></td>
                             </tr>
                        })}
                             )} 
                            
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