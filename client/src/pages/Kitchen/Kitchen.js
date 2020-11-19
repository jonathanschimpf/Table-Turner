import React, { useState, useEffect } from "react";
import { Container, Jumbotron, Form, Button, Row, Col, Modal, Table, CardDeck, CardColumns, Card, FormControl } from "react-bootstrap";
import "../ViewAllTables/ViewAllTables.css";
import API from "../../utils/API";
import Clock from 'react-live-clock';

function KitchenComp(props) {
    
    

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

                
                return {table: item.table, label: item.label, order: item.order, notes: item.extra_notes, allergies: item.allergies, course: item.course, id: item._id, username: item.username, createTime: item.createTime};
            });
            // console.log(tables, "filtered")
            return(tables)
            
            
    }


    
    //REDUCE METHOD

    const allTables = items.map(item => {
            return [item.table, item.waiterId, item.order, item.course, item.allergies, item.extra_notes, item.label, item.username, item.createTime];
        });
       
    
        const userId = localStorage.getItem('UserId')
    
        
     
    const reducedTables = allTables.reduce((tableNumbs, table) => {
        
        if(!tableNumbs.includes(table[0])) 
                    
        {
            
            tableNumbs.push(table[0])
            
        }
        
        return tableNumbs

    }, [])
    
    // console.log(reducedTables, "reducedTables")

    const [modalTable, setModalTable] = useState([]);
    
   
    const [modalShow, setModalShow] = React.useState(false);

    const [smallermodalShow, setSmallerModalShow] = React.useState(false);


    

     //creating a function for the onlick of the delete button
    const deleteOrder = (id) => {
        // console.log("delete button clicked");
        // console.log(id, "id");
        API.deleteOrders(id).then(console.log("order has been deleted"))

        .then(res => loadItems())
        .catch(err => console.log(err));
    }


    
    //creating a function for the onclick of the button that deletes an entire table
    const deleteWholeTable = (tableNumb) => {
        // console.log("**deleting table**")
        // console.log("table number is: ", tableNumb)

        API.deleteTable(tableNumb)
        .then(res=> {
            // console.log(res.data); 
        })
        .then(()=> setSmallerModalShow(false))

        .then(res => loadItems())
        .catch(err => console.log(err));
    }
    

    
// ================================================================



    return (


                <>
                <br/>
                <Container className="maxContainerWidth">
                <Jumbotron className="jumbotronStyle">

                    <br></br>
                    <h1 className="responsiveText"><strong>All Active Orders</strong></h1>
                    <Clock format={'MMMM Do YYYY, HH:mm:ss'} ticking={true} timezone={'US/EASTERN'} />
                    <br></br>
                    <br></br>
                    <br></br>

                </Jumbotron>
            </Container>



            <Container className="maxContainerWidth">

                <br />
                <br />

                

                {reducedTables.map(tableNumb =>   
                
                <Jumbotron className="jumbotronStyle" style={{marginBottom: "50px"}}>
                    <br/>
                    <h2 className="text-center responsiveH2Font">Table {tableNumb}</h2>
                    <hr style={{ height: '4px' }} />

                    <Form>

                        
                        <Table responsive className="tableBlackGround" size="sm" striped bordered hover variant="dark">
                        <thead>
                            
                            <tr>
                                <th>Item</th>
                                <th>Allergy Category</th>
                                <th>Requests &amp; Allergy Specifics</th>
                                <th>Order Label</th>
                                <th>Course#</th>
                                <th>Username</th>
                                <th>Created At</th>
                                <th className="deleteFont">Delete</th>
                            </tr>
                            
                        </thead>
                        <tbody>
                        {reducedTables.map(item => { 
                        const table = filteredOrders(item); 
                        return table.map(order  => { if (order.table === tableNumb) 
                        return  <tr>
                                <td>{order.order}</td>
                                <td>{order.allergies}</td>
                                <td>{order.notes}</td>
                                <td>{order.label}</td>
                                <td className="centeredCourseNumber">{order.course}</td>
                                <td>{order.username}</td>
                                <td>{order.createTime}</td>
                                <td className="removeRow" onClick={()=> deleteOrder(order.id)}><strong>x</strong></td>

                             </tr>
                        })}
                             )} 
                            
                        </tbody>
                    </Table>
                      

                    </Form>
                    
                </Jumbotron>

               
             )}
            
            
                       
            </Container>

            <br />
            <br />
            <br />


        </>


    );


   


    // this function is for the table order details modal
    function MyVerticallyCenteredModal(props) {


        React.useEffect(() => {
            localStorage.setItem('TableNumber', modalTable)
        }, []);


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
                                <th>Requests &amp; Allergy Specifics</th>
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
                                <td className="removeRow" onClick={()=> deleteOrder(order.id)}><strong>x</strong></td>

                             </tr>
                        })}
                             )} 
                            
                        </tbody>
                    </Table>
    
                    <p className="card-text"><small className="text-muted"><strong></strong></small></p>
    
    
    
                </Modal.Body>
                <Modal.Footer>
                <a href="/takeOrder"><Button variant="dark" size="sm" className="tableViewButtons" onClick={props.onHide}>+Add New Order Item </Button></a>
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
              <Button className="deleteTableButtons" size="sm" variant="outline-danger" onClick={()=> deleteWholeTable(modalTable)}>Delete Table</Button>
            </Modal.Footer>
          </Modal>
        );
      }
  

};

export default KitchenComp;