import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Container, CardColumns, Card, Jumbotron, Form, FormControl, Modal, Button, Row, Col } from "react-bootstrap";
import "./MenuPage.css";

function MyVerticallyCenteredModal(props) {


const [items, setItems] = useState([])
const [orderObj, setOrderObj] = useState({})

// Load all order items and store them with setOrderObj
useEffect(() => {
  loadItems()
}, [])

// Loads all menu items and sets the menu items
// function loadItems() {
//   API.getOrders()
//     .then(res => 
//       setItems(res.data)
//     )
//     .catch(err => console.log(err));
// };

// Deletes a menu item from the database with a given id, then reloads menu items from the db
function deleteItem(id) {
  API.deleteOrders(id)
    .then(res => loadItems())
    .catch(err => console.log(err));
}

// Handles updating component state when the user types into the input field
function handleInputChange(event) {
  const { name, value } = event.target;
  setOrderObj({...orderObj, [name]: value})
};

const [value, setValue] = React.useState(
    localStorage.getItem('TableNumber')
  );
  
  React.useEffect(() => {
      localStorage.setItem('TableNumber', value)},[value]);
      
const [labelValue, setLabelValue] = React.useState(
        localStorage.getItem('Label')
      );
      
      React.useEffect(() => {
          localStorage.setItem('Label', labelValue)},[labelValue]);


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
      allergies: "Dairy:true",
      course: "1",
      extra_notes: "diddlydoo"

    })
      .then(res => loadItems())
      .catch(err => console.log(err));
  
};




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
                <h3>Menu Item Title</h3>
                <br></br>
                <p>
                    Ingredients, Delicious Things, Things That Are Good For You, Things That Are Not So Good For You, Stuff You Can't Or Won't Make At Home, Something You Would Totally Order Again.
                 </p>

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


function MenuPageComp() {


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

                        <FormControl type="text" placeholder="Search Menu Item" className="mr-sm-2 regularInput responsiveInput textAlign" />

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

                    <Card>
                        <Card.Header><strong>Small Plate Item 1</strong></Card.Header>
                        <Card.Body>

                            <Card.Text>Ingredient, Ingredient, Ingredient, Ingredient, Ingredient, Ingredient</Card.Text>

                        </Card.Body>

                        <Card.Footer>

                            <Row>
                                <Col>
                                    <Card.Text className="priceLeft"><strong>$8.00</strong></Card.Text>
                                    </Col>

                                    <Col>
                                        <Button className="modalButtons" size="sm" variant="dark" onClick={() => setModalShow(true)}>
                                        +Add
                                    </Button>

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)} />

                                </Col>
                            </Row>

                        </Card.Footer>

                    </Card>


                    <Card>
                        <Card.Header><strong>Small Plate Item 2</strong></Card.Header>
                        <Card.Body>

                            <Card.Text>Ingredient, Ingredient, Ingredient, Ingredient, Ingredient, Ingredient</Card.Text>

                        </Card.Body>

                        <Card.Footer>

                            <Row>
                                <Col>
                                    <Card.Text className="priceLeft"><strong>$8.00</strong></Card.Text>
                                    </Col>

                                    <Col>
                                        <Button className="modalButtons" size="sm" variant="dark" onClick={() => setModalShow(true)}>
                                        +Add
                                    </Button>

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)} />

                                </Col>
                            </Row>

                        </Card.Footer>

                    </Card>


                    <Card>
                        <Card.Header><strong>Small Plate Item 3</strong></Card.Header>
                        <Card.Body>

                            <Card.Text>Ingredient, Ingredient, Ingredient, Ingredient, Ingredient, Ingredient</Card.Text>

                        </Card.Body>

                        <Card.Footer>

                            <Row>
                                <Col>
                                    <Card.Text className="priceLeft"><strong>$8.00</strong></Card.Text>
                                    </Col>

                                    <Col>
                                        <Button className="modalButtons" size="sm" variant="dark" onClick={() => setModalShow(true)}>
                                        +Add
                                    </Button>

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)} />

                                </Col>
                            </Row>

                        </Card.Footer>

                    </Card>


                    <Card>
                        <Card.Header><strong>Small Plate Item 4</strong></Card.Header>
                        <Card.Body>

                            <Card.Text>Ingredient, Ingredient, Ingredient, Ingredient, Ingredient, Ingredient</Card.Text>

                        </Card.Body>

                        <Card.Footer>

                            <Row>
                                <Col>
                                    <Card.Text className="priceLeft"><strong>$8.00</strong></Card.Text>
                                    </Col>

                                    <Col>
                                        <Button className="modalButtons" size="sm" variant="dark" onClick={() => setModalShow(true)}>
                                        +Add
                                    </Button>

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)} />

                                </Col>
                            </Row>

                        </Card.Footer>

                     </Card>


                    <Card>
                        <Card.Header><strong>Small Plate Item 5</strong></Card.Header>
                        <Card.Body>

                            <Card.Text>Ingredient, Ingredient, Ingredient, Ingredient, Ingredient, Ingredient</Card.Text>

                         </Card.Body>

                        <Card.Footer>

                            <Row>
                                <Col>
                                    <Card.Text className="priceLeft"><strong>$8.00</strong></Card.Text>
                                    </Col>

                                    <Col>
                                        <Button className="modalButtons" size="sm" variant="dark" onClick={() => setModalShow(true)}>
                                        +Add
                                    </Button>

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)} />

                                </Col>
                            </Row>

                        </Card.Footer>

                    </Card>


                    <Card>
                        <Card.Header><strong>Small Plate Item 6</strong></Card.Header>
                        <Card.Body>

                            <Card.Text>Ingredient, Ingredient, Ingredient, Ingredient, Ingredient, Ingredient</Card.Text>

                        </Card.Body>

                        <Card.Footer>

                            <Row>
                                <Col>
                                    <Card.Text className="priceLeft"><strong>$8.00</strong></Card.Text>
                                    </Col>

                                    <Col>
                                        <Button className="modalButtons" size="sm" variant="dark" onClick={() => setModalShow(true)}>
                                        +Add
                                    </Button>

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)} />

                                </Col>
                            </Row>

                        </Card.Footer>

                    </Card>

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


                    <Card>
                        <Card.Header><strong>Shared Plate Item 1</strong></Card.Header>
                        <Card.Body>

                            <Card.Text>Ingredient, Ingredient, Ingredient, Ingredient, Ingredient, Ingredient</Card.Text>

                        </Card.Body>

                        <Card.Footer>

                            <Row>
                                <Col>
                                    <Card.Text className="priceLeft"><strong>$12.00</strong></Card.Text>
                                    </Col>

                                    <Col>
                                        <Button className="modalButtons" size="sm" variant="dark" onClick={() => setModalShow(true)}>
                                        +Add
                                    </Button>

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)} />

                                </Col>
                            </Row>

                        </Card.Footer>

                    </Card>


                    <Card>
                        <Card.Header><strong>Shared Plate Item 2</strong></Card.Header>
                        <Card.Body>

                            <Card.Text>Ingredient, Ingredient, Ingredient, Ingredient, Ingredient, Ingredient</Card.Text>

                         </Card.Body>

                        <Card.Footer>

                            <Row>
                                <Col>
                                    <Card.Text className="priceLeft"><strong>$12.00</strong></Card.Text>
                                    </Col>

                                    <Col>
                                        <Button className="modalButtons" size="sm" variant="dark" onClick={() => setModalShow(true)}>
                                        +Add
                                    </Button>

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)} />

                                </Col>
                            </Row>

                        </Card.Footer>

                    </Card>


                    <Card>
                        <Card.Header><strong>Shared Plate Item 3</strong></Card.Header>
                        <Card.Body>

                            <Card.Text>Ingredient, Ingredient, Ingredient, Ingredient, Ingredient, Ingredient</Card.Text>

                        </Card.Body>

                        <Card.Footer>

                            <Row>
                                <Col>
                                    <Card.Text className="priceLeft"><strong>$12.00</strong></Card.Text>
                                    </Col>

                                    <Col>
                                        <Button className="modalButtons" size="sm" variant="dark" onClick={() => setModalShow(true)}>
                                        +Add
                                    </Button>

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)} />

                                </Col>
                            </Row>

                        </Card.Footer>

                    </Card>


                    <Card>
                        <Card.Header><strong>Shared Plate Item 4</strong></Card.Header>
                        <Card.Body>

                            <Card.Text>Ingredient, Ingredient, Ingredient, Ingredient, Ingredient, Ingredient</Card.Text>

                        </Card.Body>

                        <Card.Footer>

                        <Row>
                            <Col>
                                <Card.Text className="priceLeft"><strong>$12.00</strong></Card.Text>
                                </Col>

                                <Col>
                                    <Button className="modalButtons" size="sm" variant="dark" onClick={() => setModalShow(true)}>
                                    +Add
                                </Button>

                                <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)} />

                            </Col>
                        </Row>

                        </Card.Footer>

                    </Card>


                    <Card>
                        <Card.Header><strong>Shared Plate Item 5</strong></Card.Header>
                        <Card.Body>

                            <Card.Text>Ingredient, Ingredient, Ingredient, Ingredient, Ingredient, Ingredient</Card.Text>

                        </Card.Body>

                        <Card.Footer>

                            <Row>
                                <Col>
                                    <Card.Text className="priceLeft"><strong>$12.00</strong></Card.Text>
                                    </Col>

                                    <Col>
                                        <Button className="modalButtons" size="sm" variant="dark" onClick={() => setModalShow(true)}>
                                        +Add
                                    </Button>

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)} />

                                </Col>
                            </Row>

                         </Card.Footer>

                    </Card>


                    <Card>
                        <Card.Header><strong>Shared Plate Item 6</strong></Card.Header>
                        <Card.Body>

                            <Card.Text>Ingredient, Ingredient, Ingredient, Ingredient, Ingredient, Ingredient</Card.Text>

                         </Card.Body>

                        <Card.Footer>

                            <Row>
                                <Col>
                                    <Card.Text className="priceLeft"><strong>$12.00</strong></Card.Text>
                                 </Col>

                                 <Col>
                                     <Button className="modalButtons" size="sm" variant="dark" onClick={() => setModalShow(true)}>
                                        +Add
                                    </Button>

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)} />

                                </Col>
                            </Row>

                        </Card.Footer>

                    </Card>

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

                    <Card>
                        <Card.Header><strong>Main Course Item 1</strong></Card.Header>
                        <Card.Body>

                            <Card.Text>Ingredient, Ingredient, Ingredient, Ingredient, Ingredient, Ingredient</Card.Text>

                        </Card.Body>

                        <Card.Footer>

                            <Row>
                                <Col>
                                    <Card.Text className="priceLeft"><strong>$20.00</strong></Card.Text>
                                 </Col>

                                 <Col>
                                     <Button className="modalButtons" size="sm" variant="dark" onClick={() => setModalShow(true)}>
                                        +Add
                                    </Button>

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)} />

                                </Col>
                            </Row>

                        </Card.Footer>

                    </Card>


                    <Card>
                        <Card.Header><strong>Main Course Item 2</strong></Card.Header>
                        <Card.Body>

                            <Card.Text>Ingredient, Ingredient, Ingredient, Ingredient, Ingredient, Ingredient</Card.Text>

                        </Card.Body>

                        <Card.Footer>

                            <Row>
                                <Col>
                                    <Card.Text className="priceLeft"><strong>$20.00</strong></Card.Text>
                                 </Col>

                                 <Col>
                                     <Button className="modalButtons" size="sm" variant="dark" onClick={() => setModalShow(true)}>
                                        +Add
                                    </Button>

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)} />

                                </Col>
                            </Row>

                        </Card.Footer>

                    </Card>


                    <Card>
                        <Card.Header><strong>Main Course Item 3</strong></Card.Header>
                        <Card.Body>

                            <Card.Text>Ingredient, Ingredient, Ingredient, Ingredient, Ingredient, Ingredient</Card.Text>

                        </Card.Body>

                        <Card.Footer>

                            <Row>
                                <Col>
                                    <Card.Text className="priceLeft"><strong>$20.00</strong></Card.Text>
                                 </Col>

                                 <Col>
                                     <Button className="modalButtons" size="sm" variant="dark" onClick={() => setModalShow(true)}>
                                        +Add
                                    </Button>

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)} />

                                </Col>
                            </Row>

                        </Card.Footer>

                    </Card>


                    <Card>
                        <Card.Header><strong>Main Course Item 4</strong></Card.Header>
                        <Card.Body>

                            <Card.Text>Ingredient, Ingredient, Ingredient, Ingredient, Ingredient, Ingredient</Card.Text>

                        </Card.Body>

                        <Card.Footer>

                            <Row>
                                <Col>
                                    <Card.Text className="priceLeft"><strong>$20.00</strong></Card.Text>
                                 </Col>

                                 <Col>
                                     <Button className="modalButtons" size="sm" variant="dark" onClick={() => setModalShow(true)}>
                                        +Add
                                    </Button>

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)} />

                                </Col>
                            </Row>

                        </Card.Footer>

                    </Card>


                    <Card>
                        <Card.Header><strong>Main Course Item 5</strong></Card.Header>
                        <Card.Body>

                            <Card.Text>Ingredient, Ingredient, Ingredient, Ingredient, Ingredient, Ingredient</Card.Text>

                        </Card.Body>

                        <Card.Footer>

                            <Row>
                                <Col>
                                    <Card.Text className="priceLeft"><strong>$20.00</strong></Card.Text>
                                 </Col>

                                 <Col>
                                     <Button className="modalButtons" size="sm" variant="dark" onClick={() => setModalShow(true)}>
                                        +Add
                                    </Button>

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)} />

                                </Col>
                            </Row>

                        </Card.Footer>

                    </Card>

                    <Card>
                        <Card.Header><strong>Main Course Item 6</strong></Card.Header>
                        <Card.Body>

                            <Card.Text>Ingredient, Ingredient, Ingredient, Ingredient, Ingredient, Ingredient</Card.Text>

                         </Card.Body>

                        <Card.Footer>

                            <Row>
                                <Col>
                                    <Card.Text className="priceLeft"><strong>$20.00</strong></Card.Text>
                                 </Col>

                                 <Col>
                                     <Button className="modalButtons" size="sm" variant="dark" onClick={() => setModalShow(true)}>
                                        +Add
                                    </Button>

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)} />

                                </Col>
                            </Row>

                        </Card.Footer>

                    </Card>
                    
                    
                    <Card>
                        <Card.Header><strong>Main Course Item 7</strong></Card.Header>
                        <Card.Body>

                            <Card.Text>Ingredient, Ingredient, Ingredient, Ingredient, Ingredient, Ingredient</Card.Text>

                        </Card.Body>

                        <Card.Footer>

                            <Row>
                                <Col>
                                    <Card.Text className="priceLeft"><strong>$20.00</strong></Card.Text>
                                 </Col>

                                 <Col>
                                     <Button className="modalButtons" size="sm" variant="dark" onClick={() => setModalShow(true)}>
                                        +Add
                                    </Button>

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)} />

                                </Col>
                            </Row>

                        </Card.Footer>

                    </Card>
                    

                    <Card>
                        <Card.Header><strong>Main Course Item 8</strong></Card.Header>
                        <Card.Body>

                            <Card.Text>Ingredient, Ingredient, Ingredient, Ingredient, Ingredient, Ingredient</Card.Text>

                        </Card.Body>

                        <Card.Footer>

                            <Row>
                                <Col>
                                    <Card.Text className="priceLeft"><strong>$20.00</strong></Card.Text>
                                 </Col>

                                 <Col>
                                     <Button className="modalButtons" size="sm" variant="dark" onClick={() => setModalShow(true)}>
                                        +Add
                                    </Button>

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)} />

                                </Col>
                            </Row>

                        </Card.Footer>

                    </Card>

                    <Card>
                        <Card.Header><strong>Main Course Item 9</strong></Card.Header>
                        <Card.Body>

                            <Card.Text>Ingredient, Ingredient, Ingredient, Ingredient, Ingredient, Ingredient</Card.Text>

                        </Card.Body>

                        <Card.Footer>

                            <Row>
                                <Col>
                                    <Card.Text className="priceLeft"><strong>$20.00</strong></Card.Text>
                                 </Col>

                                 <Col>
                                     <Button className="modalButtons" size="sm" variant="dark" onClick={() => setModalShow(true)}>
                                        +Add
                                    </Button>

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)} />

                                </Col>
                            </Row>

                        </Card.Footer>

                    </Card>

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

                    <Card>

                        <Card.Header><strong>Dessert Item 1</strong></Card.Header>

                        <Card.Body>

                            <Card.Text>Sugary Ingredient, Sugary Ingredient, Sugary Ingredient, Sugary Ingredient, Sugary Ingredient, Sugary Ingredient</Card.Text>

                        </Card.Body>

                        <Card.Footer>

                            <Row>
                                <Col>
                                    <Card.Text className="priceLeft"><strong>$8.00</strong></Card.Text>
                                </Col>

                                <Col>
                                    <Button className="modalButtons" size="sm" variant="dark" onClick={() => setModalShow(true)}>
                                        +Add
                                     </Button>

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)} />

                                </Col>
                            </Row>

                        </Card.Footer>

                    </Card>


                    <Card>

                        <Card.Header><strong>Dessert Item 2</strong></Card.Header>

                        <Card.Body>

                            <Card.Text>Sugary Ingredient, Sugary Ingredient, Sugary Ingredient, Sugary Ingredient, Sugary Ingredient, Sugary Ingredient</Card.Text>

                        </Card.Body>

                        <Card.Footer>

                            <Row>
                                <Col>
                                    <Card.Text className="priceLeft"><strong>$8.00</strong></Card.Text>
                                </Col>

                                <Col>
                                    <Button className="modalButtons" size="sm" variant="dark" onClick={() => setModalShow(true)}>
                                        +Add
                                </Button>

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)} />

                                </Col>
                            </Row>

                        </Card.Footer>

                    </Card>


                    <Card>

                        <Card.Header><strong>Dessert Item 3</strong></Card.Header>

                        <Card.Body>

                            <Card.Text>Sugary Ingredient, Sugary Ingredient, Sugary Ingredient, Sugary Ingredient, Sugary Ingredient, Sugary Ingredient</Card.Text>

                        </Card.Body>

                        <Card.Footer>

                            <Row>
                                <Col>
                                    <Card.Text className="priceLeft"><strong>$8.00</strong></Card.Text>
                                </Col>

                                <Col>
                                    <Button className="modalButtons" size="sm" variant="dark" onClick={() => setModalShow(true)}>
                                        +Add
                                </Button>

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)} />

                                </Col>
                            </Row>

                        </Card.Footer>

                    </Card>


                </CardColumns>
            </Container>

            <br />
            <br />
            <br />
            <br />


        </>

    );

};

export default MenuPageComp;