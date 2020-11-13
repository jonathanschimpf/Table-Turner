import React, { useState, useEffect, setState } from "react";
import API from "../../utils/API";
import { useParams } from "react-router-dom";
import { Container, CardColumns, Card, Jumbotron, Form, FormControl, Modal, Button, Row, Col } from "react-bootstrap";
import "./MenuPage.css";

//toastify
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function MenuPageComp() {
    
    
    const [modalTitle, setModalTitle] = useState([]);
    const [modalDesc, setModalDesc] = useState([]);

    const [items, setItems] = useState([])

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
        const { name, value } = event.target;
        setSearchTerm(value)
        console.log(value)
    }

    // #####################################################################################################
    //SEARCHING FOR MENU ITEMS AND FILTERING


    //setting the state for our search term
    const [search, setSearchTerm] = useState("")
    

    const lowerCaseSearch = search.toLowerCase()
    const filteredArrayOfFood = items.filter(i => i.item.toLowerCase().includes(lowerCaseSearch))
    // console.log("filtered array is: ", filteredArrayOfFood)
    // #####################################################################################################








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

    // const [menuItem, setMenuItem] = useState({});
    // const { id, item, price } = useParams()
    // useEffect(() => {
    //     API.getMenu(id, item, price)

    //         .then(res => setMenuItem(res.data))
    //         .catch(err => console.log(err));

    // }, [])


    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false);
    const [modalShow4, setModalShow4] = React.useState(false);
    const [modalShow5, setModalShow5] = React.useState(false);

    

    // toast
    const notify = () => toast.dark(`${modalTitle} Added!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide
        });


    return (

        <>
        <ToastContainer className="toastContainer"/>

            <br />

            <Container className="maxContainerWidth">
                <Jumbotron className="jumbotronStyle">

                    <br></br>
                    <h1 className="responsiveText"><strong>Menu</strong></h1>
                    <br></br>



      



                    <Form inline>
                        <FormControl type="text" placeholder="Search Menu" autocomplete="off" className="mr-sm-2 centerText regularInput responsiveInput" name="search" onChange={handleInputChange} />
                    </Form>
                    <a href="/takeOrder"><Button variant="outline-dark" className="my-2 my-lg-0 formControl add addNewTableButton regularButton responsiveButton">Add Items To New Seat</Button></a>

                    <br></br>
                    <br></br>

                </Jumbotron>
            </Container>


            {/* Looping over the filtered Search Terms ################################################################## */}
            <Container className={search.length === 0 ? "d-none maxContainerWidth" : "d-block maxContainerWidth"}>

                <CardColumns>



                    {filteredArrayOfFood.map(item =>

                        <Card>
                            <Card.Header><strong>{item.item}</strong></Card.Header>
                            <Card.Body>

                                <Card.Text>{item.ingredients}</Card.Text>

                            </Card.Body>

                            <Card.Footer>

                                <Row>
                                    <Col>
                                        <Card.Text className="priceLeft"><strong>${item.price}</strong></Card.Text>
                                    </Col>

                                    <Col>
                                        <Button id={item._id} className="modalButtons" size="sm" variant="dark" onClick={() => {
                                            setModalTitle(item.item)
                                            setModalDesc(item.ingredients)
                                            setModalShow(true)
                                        }} >
                                            +Add
                                    </Button>


                                    </Col>
                                </Row>

                            </Card.Footer>

                        </Card>
                    )}

                        <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)} />

                </CardColumns>
            </Container >




            <Container className="maxContainerWidth">

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
                                            setModalShow2(true)
                                        }} >
                                            +Add
                                    </Button>

                                        

                                    </Col>
                                </Row>

                            </Card.Footer>

                        </Card>
                    )}

                        <MyVerticallyCenteredModal
                            show={modalShow2}
                            onHide={() => setModalShow2(false)} />

                </CardColumns>
            </Container>

            <br />
            <br />

            <Container className="maxContainerWidth">

                <h3>Shared Plates</h3>
                <br />

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
                                        <Button id={item[3]} className="modalButtons" size="sm" variant="dark" onClick={() => {
                                            setModalTitle(item[0])
                                            setModalDesc(item[2])
                                            setModalShow3(true)
                                        }} >
                                            +Add
                                    </Button>

                                        

                                    </Col>
                                </Row>

                            </Card.Footer>

                        </Card>

                    )}

                        <MyVerticallyCenteredModal
                          show={modalShow3}
                            onHide={() => setModalShow3(false)} />

                </CardColumns>
            </Container>

            <br />
            <br />

            <Container className="maxContainerWidth">

                <h3>Main Courses</h3>
                <br />

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
                                        <Button id={item[3]} className="modalButtons" size="sm" variant="dark" onClick={() => {
                                            setModalTitle(item[0])
                                            setModalDesc(item[2])
                                            setModalShow4(true)
                                        }} >
                                            +Add
                                    </Button>

                                    </Col>
                                </Row>

                            </Card.Footer>

                        </Card>
                    )}

                        <MyVerticallyCenteredModal
                          show={modalShow4}
                          onHide={() => setModalShow4(false)} />

                </CardColumns>
            </Container>

            <br />
            <br />

            <Container className="maxContainerWidth">

                <h3>Dessert</h3>
                <br />

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
                                        <Button id={item[3]} className="modalButtons" size="sm" variant="dark" onClick={() => {
                                            setModalTitle(item[0])
                                            setModalDesc(item[2])
                                            setModalShow5(true)
                                        }} >
                                            +Add
                                     </Button>
                                        

                                    </Col>
                                </Row>

                            </Card.Footer>

                        </Card>

                    )}

                        <MyVerticallyCenteredModal
                          show={modalShow5}
                         onHide={() => setModalShow5(false)} />   

                </CardColumns>
            </Container>

            <br />
            <br />
            <br />
            <br />


        </>

    );





    function MyVerticallyCenteredModal(props) {
        
        const [tableValue, setTableValue] = React.useState(
            localStorage.getItem('TableNumber')
        );

        React.useEffect(() => {
            localStorage.setItem('TableNumber', tableValue)
        }, [tableValue]);

        const [labelValue, setLabelValue] = React.useState(
            localStorage.getItem('Label')
        );

        React.useEffect(() => {
            localStorage.setItem('Label', labelValue)
        }, [labelValue]);

        const [items, setItems] = useState([])
        const [modalObj, setModalObj] = useState({
            table: tableValue,
            order: modalTitle,
            course: 0,
            allergies: "",
            extra_notes: "",
            label: labelValue,
            
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

        function handleInputChange(event) {
            const { name, value } = event.target;
            setModalObj({ ...modalObj, [name]: value })
        };

        function handleRadioBtn(event) {
            const { name, value } = event.target;

            console.log(name)
            console.log(value)
            setModalObj({ ...modalObj, course: parseInt(value) })
        }
        
        function handleCheckbox(event){
            const { name, value } = event.target
            
            // const orderArr = []
            
            // if(value < 1) {
            //     orderArr.push(event.target.value)
            // }
            
            // value[i] = event.target.value
            // this.state = {
            //     days:[]
            // }
            // let dayArr;
            
            // handleDaySelect (event) {
            
            //     /*now we should check if the selected days
            //     already exist so that we don't double entry it*/
            
            //     if (this.state.days.indexOf(event.target.value) < 1) {
            //         dayArr.push(event.target.value)
            //     }
            
            //     this.setState({
            //        days: dayArr
            //     })
            // }
            // this.setState({allergies: event.target.value});
            // const ConfirmedAllergies = this.state.ConfirmedAllergies;
            // ConfirmedAllergies[i] = event.target.value;
            // this.setState({ConfirmedAllergies})
            
            //arr.split(", ")

            //add value if exists 

            //remove value if doesn't exist 

            //arr.join(", ")
            console.log(name)
            console.log(value)
            
            setModalObj({...modalObj, allergies: (value)})
        }



        function handleFormSubmit(event) {
            event.preventDefault();
            console.log(tableValue)
            console.log(labelValue)
            console.log(modalObj)
            console.log("this is MODAL")
            API.saveOrders(modalObj).then(res => {
                console.log(res.data);
                props.onHide();
            })
                .catch(err => console.log(err));

        };


    
    
    
        // const [menuItem, setMenuItem] = useState({});
        // const { id, item, price } = useParams()
        // useEffect(() => {
        //     API.getMenu(id, item, price)
    
        //         .then(res => setMenuItem(res.data))
        //         .catch(err => console.log(err));
    
        // }, [])
    
    
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        +Order Details
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
                            <input className="form-check-input" type="radio" name="course" id="inlineRadio1" onChange={handleRadioBtn} value={1} />
                            <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="course" id="inlineRadio2" onChange={handleRadioBtn} value={2} />
                            <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="course" id="inlineRadio1" onChange={handleRadioBtn} value={3} />
                            <label className="form-check-label" htmlFor="inlineRadio1">3</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="course" id="inlineRadio2" onChange={handleRadioBtn} value={4} />
                            <label className="form-check-label" htmlFor="inlineRadio2">4</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="course" id="inlineRadio1" onChange={handleRadioBtn} value={5} />
                            <label className="form-check-label" htmlFor="inlineRadio1">5</label>
                        </div>
                    </div>

                    <br />

                    <p className="card-text"><small className="text-muted"><strong>Allergy Category (If Applicable):</strong></small></p>
                    <div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" onChange={handleCheckbox} variant="dark" name="gluten" value={"Gluten"} />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Gluten</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" onChange={handleCheckbox} name="dairy" value={"Dairy"}/>
                        <label className="form-check-label" htmlFor="inlineCheckbox2">Dairy </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" onChange={handleCheckbox} name="shellfish" value={"Shellfish"} />
                        <label className="form-check-label" htmlFor="inlineCheckbox3">Shellfish</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox4" onChange={handleCheckbox}name="nuts" value={"Nuts"} />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Nuts</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox5" onChange={handleCheckbox} name="egg" value={"Egg"}/>
                        <label className="form-check-label" htmlFor="inlineCheckbox2">Egg</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox6" onChange={handleCheckbox} name="lily" value={"Lily"}/>
                        <label className="form-check-label" htmlFor="inlineCheckbox3">Lily</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox7" onChange={handleCheckbox} name="alcohol" value={"Alcohol"}/>
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Alcohol</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox8" onChange={handleCheckbox} name="pork" value={"Pork"}/>
                        <label className="form-check-label" htmlFor="inlineCheckbox2">Pork</label>
                    </div>
                    </div>

                    <br />

                    <p className="card-text"><small className="text-muted"><strong>Specific Allergy / Special Request:</strong></small></p>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">

                        </div>
                        <input
                            onChange={handleInputChange}
                            name="extra_notes"
                            placeholder="allergies/requests"
                            type="text"
                            className="formControlSizing"
                            placeholder="Allergy/Requests"
                            autocomplete="off"
                        // aria-label="Text input with checkbox"
                        />
                    </div>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark"
                        className="modalButtons"
                        onClick={()=> {handleFormSubmit(event); notify()}}>
                        +Add Item </Button>
                </Modal.Footer>
            </Modal>
        );

    }



};



export default MenuPageComp;