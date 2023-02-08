import React, { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col, Modal, Table } from "react-bootstrap";
import API from "../../utils/API";
import "./ViewAllTables.css";


function ViewAllTablesComp({ user, getUser }) {


    const userId = localStorage.getItem('UserId')

    // State
    const [items, setItems] = useState([]);
    const [modalTable, setModalTable] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [smallermodalShow, setSmallerModalShow] = useState(false);


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




    //FILTER MAP METHOD
    const filteredOrders = function (tableNum) {

        var tables = items.filter(item => {
            return item.table === tableNum
        }).map(item => {

            //I HAD TO INCLUDE THE ID: ITEM._ID HERE BECAUSE IT WAS NOT AVAILABLE BEFORE
            return {
                table: item.table,
                label: item.label,
                order: item.order,
                notes: item.extra_notes,
                allergies: item.allergies,
                course: item.course,
                id: item._id
            };
        });
        // console.log(tables, "filtered")
        return (tables)
    }




    const allTables = items.map(item => {
        return [item.table, item.waiterId];
    });
    // const userTable = items.map(item => {
    //         return [item.waiterId];
    //     });


    //REDUCE METHOD
    const reducedTables = allTables.reduce((tableNumbs, table) => {

        if ((!tableNumbs.includes(table[0])) && (table[1] == userId)) {
            tableNumbs.push(table[0])
        }

        return tableNumbs
    }, [])



    // Function for the onlick of the delete button
    const deleteOrder = (id) => {
        API.deleteOrders(id).then(console.log("order has been deleted"))
            .then(res => loadItems())
            .catch(err => console.log(err));
    }



    // Function for the onclick of the button that deletes an entire table
    const deleteWholeTable = (tableNum) => {

        API.deleteTable(tableNum)
            .then(res => {
                console.log(res);
            })
            .then(() => setSmallerModalShow(false))
            .then(res => loadItems())
            .catch(err => console.log(err));
    }



    return (


        <>
            <br />
            <Container className="maxContainerWidth">
                <div className="divStyle">

                    <h1 className="responsiveText"><strong>My Active Tables</strong></h1>

                    <Link to="/startTable">
                        <Button variant="outline-dark" className="my-2 my-lg-0 formControl add addNewTableButton regularButton responsiveButton menuButton">Add New Table</Button>
                    </Link>

                    <Link to="/viewRestaurant">
                        <Button variant="outline-dark" className="my-2 my-lg-0 formControl add addNewTableButton regularButton responsiveButton">View Restaurant</Button>
                    </Link>

                </div>
            </Container>




            <Container>

                <div className="flexWrap">

                    {reducedTables.map(tableNum =>

                        <div className="divTableView">
                            <h2 className="text-center responsiveH2Font">Table {tableNum}</h2>
                            <hr style={{ height: '4px' }} />

                            <Form>

                                <Row>
                                    <Col xs={9}>
                                        <Button variant="outline-dark" className="my-2 my-lg-0 formControl view tableViewButtons" size="sm" onClick={() => {
                                            setModalTable(tableNum)
                                            setModalShow(true)

                                        }} block>View Details
                                        </Button>
                                    </Col>

                                    <Col xs={3}>
                                        <Button variant="outline-danger" className="my-2 my-lg-0 formControl view deleteTableButtons"
                                            size="sm" block
                                            onClick={() => { setSmallerModalShow(true); setModalTable(tableNum) }}
                                        >
                                            <strong>x</strong>
                                        </Button>
                                    </Col>
                                </Row>

                            </Form>

                        </div>

                    )}

                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />

                    <MySmallerVerticallyCenteredModal
                        show={smallermodalShow}
                        onHide={() => setSmallerModalShow(false)}
                    />

                </div>

            </Container>
        </>
    );





    // this function is for the table order details modal
    function MyVerticallyCenteredModal(props) {


        useEffect(() => {
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
                                return table.map(order => {
                                    if (order.table === modalTable)
                                        return <tr>
                                            <td>{order.order}</td>
                                            <td>{order.allergies.join(", ")}</td>
                                            <td>{order.notes}</td>
                                            <td>{order.label}</td>
                                            <td className="centeredCourseNumber">{order.course}</td>
                                            <td className="removeRow" onClick={() => deleteOrder(order.id)}><strong>x</strong></td>

                                        </tr>
                                })
                            }
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
                    <Button className="deleteTableButtons" size="sm" variant="outline-danger" onClick={() => deleteWholeTable(modalTable)}>Delete Table</Button>
                </Modal.Footer>
            </Modal>
        );
    }


};

export default ViewAllTablesComp;