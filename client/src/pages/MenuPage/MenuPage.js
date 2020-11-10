import React, { useState, useEffect, setState } from "react";
import API from "../../utils/API";
import { useParams } from "react-router-dom";
import { Container, CardColumns, Card, Jumbotron, Form, FormControl, Modal, Button, Row, Col } from "react-bootstrap";
import "./MenuPage.css";




function MenuPageComp(props) {
    
    const [modalTitle, setModalTitle] = useState([]);
    const [modalDesc, setModalDesc] = useState([]);
    // const [order, setOrder] = useState([]);
    // const [course, setCourse] = useState([]);
    // const [allergies, setAllergies] = setState(true);
    // const [notes, setNotes] = useState([]);

    const [items, setItems] = useState([])
    const [menuObj, setMenuObj] = useState({})
    
    const smallPlates = items.filter(item => {
        return item.section === "Small Plates"
    }).map(item => {
        return [item.item, item.price, item.ingredients, item._id];
    })

    const sharedPlates = items.filter(item => {
        return item.section === "Shared Plates"
    }).map(item => {
        return [item.item, item.price, item.ingredients, item._id];
    })
    const mainCourse = items.filter(item => {
        return item.section === "Main Course"
    }).map(item => {
        return [item.item, item.price, item.ingredients, item._id];
    })
 
    const dessert = items.filter(item => {
        return item.section === "Dessert"
    }).map(item => {
        return [item.item, item.price, item.ingredients, item._id];
    })
    




    const handleInputChange = event => {
        const { value } = event.target;
        setSearchState(value)
        console.log(value)
    }

    // Load all menu items and store them with setMenuObj
    useEffect(() => {
        loadItems()
    }, [])

    // Loads all menu items and sets the menu items
    function loadItems() {
        API.getMenus()
            .then(res =>
                setItems(res.data)
            )
            .catch(err => console.log(err));
    };

    const [menuItem, setMenuItem] = useState({});
    const { id, item, price } = useParams()
    useEffect(() => {
        API.getMenu(id, item, price)

            .then(res => setMenuItem(res.data))
            .catch(err => console.log(err));

    }, [])


    
    const [modalShow, setModalShow] = React.useState(false);

    return (

        <>
        
            <br />

            <Container>
                <Jumbotron className="jumbotronStyle">

                    <br></br>
                    <h1 className="responsiveText"><strong>Menu</strong></h1>
                    <br></br>



                    <Form inline>
                        <FormControl type="text" placeholder="Search Menu" className="mr-sm-2" regularInput responsiveInput textAlname="search" onChange={handleInputChange} />
                    </Form>

                    <br></br>
                    <br></br>

                </Jumbotron>
            </Container>


            <Container >

                <br />
                <h3>Small Plates</h3>
                <br />


                <CardColumns>
                  {smallPlates.map(item =>
                    <Card>
                        <Card.Header><strong>{item[0]}</strong></Card.Header>
                        <Card.Body>
                  
                  <Card.Text>{item[2]}</Card.Text>

                        </Card.Body>

                        <Card.Footer>

                            <Row>
                                <Col>
                                    <Card.Text className="priceLeft"><strong>${item[1]}</strong></Card.Text>
                                </Col>

                                <Col>
                                  <Button id={item[3]} className="modalButtons" size="sm" variant="dark" onClick={() => {
                                      setModalTitle(item[0])
                                      setModalDesc(item[2])
                                      setModalShow(true)
                                      }} >
                                        +Add
                                    </Button>

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)} />

                                </Col>
                            </Row>

                        </Card.Footer>

                    </Card>
                 )}

                </CardColumns>
            </Container>

            <br />
            <br />

            <Container>

                <h3>Shared Plates</h3>
                <br />


            </Container>


            <Container>
                <CardColumns>

                {sharedPlates.map(item =>   
                    <Card>
                        <Card.Header><strong>{item[0]}</strong></Card.Header>
                        <Card.Body>

                            <Card.Text>{item[2]}</Card.Text>

                        </Card.Body>

                        <Card.Footer>

                            <Row>
                                <Col>
                <Card.Text className="priceLeft"><strong>${item[1]}</strong></Card.Text>
                                </Col>

                                <Col>
                                    <Button id={item[3]} className="modalButtons" size="sm" variant="dark" onClick={() => setModalShow(true)}>
                                        +Add
                                    </Button>

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)} />

                                </Col>
                            </Row>

                        </Card.Footer>

                    </Card>

                )}
                    
                </CardColumns>
            </Container>

            <br />
            <br />

            <Container>

                <h3>Main Courses</h3>
                <br />

            </Container>

            <Container>
                <CardColumns>
                {mainCourse.map(item =>  
                    <Card>
                        <Card.Header><strong>{item[0]}</strong></Card.Header>
                        <Card.Body>

                            <Card.Text>{item[2]}</Card.Text>

                        </Card.Body>

                        <Card.Footer>

                            <Row>
                                <Col>
                                    <Card.Text className="priceLeft"><strong>${item[1]}</strong></Card.Text>
                                </Col>

                                <Col>
                                    <Button id={item[3]} className="modalButtons" size="sm" variant="dark" onClick={() => setModalShow(true)}>
                                        +Add
                                    </Button>

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)} />

                                </Col>
                            </Row>

                        </Card.Footer>

                    </Card>
                )}

                </CardColumns>
            </Container>

            <br />
            <br />

            <Container>

                <h3>Dessert</h3>
                <br />

            </Container>

            <Container>
                <CardColumns>
                {dessert.map(item =>  
                    <Card>

                <Card.Header><strong>{item[0]}</strong></Card.Header>

                        <Card.Body>

                <Card.Text>{item[2]}</Card.Text>

                        </Card.Body>

                        <Card.Footer>

                            <Row>
                                <Col>
                            <Card.Text className="priceLeft"><strong>${item[1]}</strong></Card.Text>
                                </Col>

                                <Col>
                                    <Button id={item[3]} className="modalButtons" size="sm" variant="dark" onClick={() => setModalShow(true)}>
                                        +Add
                                     </Button>

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)} />

                                </Col>
                            </Row>

                        </Card.Footer>

                    </Card>

                )}

                </CardColumns>
            </Container>

            <br />
            <br />
            <br />
            <br />


        </>

    );
    
    function MyVerticallyCenteredModal(props) {

        const [items, setItems] = useState([])
        const [menuObj, setMenuObj] = useState({})
    
        const plates = items.map(item => {
            return [item.item, item.price, item.ingredients, item._id];
        })
        const smallPlates = items.filter(item => {
            return item.section === "Small Plates"
        }).map(item => {
            return [item.item, item.price, item.ingredients, item._id];
        })
    
        const sharedPlates = items.filter(item => {
            return item.section === "Shared Plates"
        }).map(item => {
            return [item.item, item.price, item.ingredients, item._id];
        })
        const mainCourse = items.filter(item => {
            return item.section === "Main Course"
        }).map(item => {
            return [item.item, item.price, item.ingredients, item._id];
        })
     
        const dessert = items.map(item => {
            return [item.item, item.price, item.ingredients, item._id];
        })
        
        
    
        // Load all menu items and store them with setMenuObj
        useEffect(() => {
            loadItems()
        }, [])
    
        // Loads all menu items and sets the menu items
        function loadItems() {
            API.getMenus()
                .then(res =>
                    setItems(res.data)
                )
                .catch(err => console.log(err));
        };
    
        const [orderObj, setOrderObj] = useState({});
    
        const [value, setValue] = React.useState(
            localStorage.getItem('TableNumber')
        );
    
        React.useEffect(() => {
            localStorage.setItem('TableNumber', value)
        }, [value]);
    
        const [labelValue, setLabelValue] = React.useState(
            localStorage.getItem('Label')
        );
    
        React.useEffect(() => {
            localStorage.setItem('Label', labelValue)
        }, [labelValue]);
    
       
    
        // When the form is submitted, use the API.saveBook method to save the book data
        // Then reload books from the database
        function handleFormSubmit(event) {
            event.preventDefault();
            console.log(value)
            console.log(labelValue)
            API.saveOrders({
                table: value,
                label: labelValue,
                order: "chicken",
                allergies: Array,
                course: "1",
                extra_notes: "diddlydoo"
    
            }).catch(err => console.log(err));
    
        };
    
    
        const [menuItem, setMenuItem] = useState({});
        const { id, item, price } = useParams()
        useEffect(() => {
            API.getMenu(id, item, price)
    
                .then(res => setMenuItem(res.data))
                .catch(err => console.log(err));
    
        }, [])
    
    
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        +Add Item
              </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <h3>{modalTitle}</h3>
                    <br></br>
                    <p>{modalDesc}</p>
    
                    <hr></hr>
    
                    <p className="card-text"><small className="text-muted"><strong>Course Number (If Applicable):</strong></small></p>
    
                    <div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                            <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                            <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                            <label className="form-check-label" htmlFor="inlineRadio1">3</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                            <label className="form-check-label" htmlFor="inlineRadio2">4</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                            <label className="form-check-label" htmlFor="inlineRadio1">5</label>
                        </div>
                    </div>
    
                    <br />
    
                    <p className="card-text"><small className="text-muted"><strong>Allergy Category (If Applicable):</strong></small></p>
                    <div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" variant="dark" />
                            <label className="form-check-label" htmlFor="inlineCheckbox1">Gluten</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" defaultValue="option2" />
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Dairy</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" defaultValue="option3" />
                            <label className="form-check-label" htmlFor="inlineCheckbox3">Shellfish</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox4" defaultValue="option4" />
                            <label className="form-check-label" htmlFor="inlineCheckbox1">Nuts</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox5" defaultValue="option5" />
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Egg</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox6" defaultValue="option6" />
                            <label className="form-check-label" htmlFor="inlineCheckbox3">Lily</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox7" defaultValue="option7" />
                            <label className="form-check-label" htmlFor="inlineCheckbox1">Alcohol</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox8" defaultValue="option8" />
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Pork</label>
                        </div>
                    </div>
    
                    <br />
    
                    <p className="card-text"><small className="text-muted"><strong>Specific Allergy / Special Request:</strong></small></p>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="checkbox" aria-label="Checkbox for following text input" />
                            </div>
                        </div>
                        <input type="text" className="formControlSizing" placeholder="" aria-label="Text input with checkbox" />
                    </div>
    
    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" className="modalButtons" onClick={props.onHide, handleFormSubmit}>+Add Item </Button>
                </Modal.Footer>
            </Modal>
        );
        
    }
    
    

};



export default MenuPageComp;