import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { Container, Card, Form, FormControl, Button, Row, Col } from "react-bootstrap";
// import { ToastContainer, toast, Slide } from 'react-toastify';
import OrderModal from "../../components/Menu/OrderModal/OrderModal";
import 'react-toastify/dist/ReactToastify.css';
import "./MenuPage.css";



export default function MenuPageComp() {


    const [modalTitle, setModalTitle] = useState([]);
    const [modalDesc, setModalDesc] = useState([]);

    const [items, setItems] = useState([]);

    // Loading state
    const [isLoading, setIsLoading] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isError, setIsError] = useState(false);


    const [smallPlates, setSmallPlates] = useState([]);
    const [sharedPlates, setSharedPlates] = useState([]);
    const [mainCourse, setMainCourse] = useState([]);
    const [dessert, setDessert] = useState([]);


    // ######################################################F###############################################
    //SEARCHING FOR MENU ITEMS AND FILTERING

    //setting the state for our search term
    const [search, setSearchTerm] = useState("")

    const lowerCaseSearch = search.toLowerCase()
    const filteredArrayOfFood = items.filter(i => i.item.toLowerCase().includes(lowerCaseSearch))
    // console.log("filtered array is: ", filteredArrayOfFood)
    // #####################################################################################################



    const [modalShow, setModalShow] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [modalShow3, setModalShow3] = useState(false);
    const [modalShow4, setModalShow4] = useState(false);
    const [modalShow5, setModalShow5] = useState(false);







    const handleInputChange = event => {
        const { name, value } = event.target;
        setSearchTerm(value)
    }









    // Load all menu items and store them with setMenuObj
    useEffect(() => {
        loadItems()
    }, [])

    // Loads all menu items and sets the menu items
    function loadItems() {
        setIsLoading(true);
        API.getMenus()
            .then(res => {
                console.log('menu items: ', res);
                setItems(res.data)

                let smallPlates = items.filter(item => item.section === "Small Plates").map(item => {
                    return [item.item, item.price, item.ingredients, item._id];
                })

                let sharedPlates = items.filter(item => item.section === "Shared Plates").map(item => {
                    return [item.item, item.price, item.ingredients, item._id];
                })
                let mainCourse = items.filter(item => item.section === "Main Course").map(item => {
                    return [item.item, item.price, item.ingredients, item._id];
                })

                let dessert = items.filter(item => item.section === "Dessert").map(item => {
                    return [item.item, item.price, item.ingredients, item._id];
                })


                console.log('smallPLaates: ', smallPlates);

                setSmallPlates(smallPlates);
                setSharedPlates(sharedPlates);
                setMainCourse(mainCourse);
                setDessert(dessert);

                setIsLoaded(true);
                setIsLoading(false);

            })
            .catch(err => console.log(err));
    };





    // toast
    // const notify = () => toast.dark(`${modalTitle} Added!`, {
    //     position: "top-right",
    //     autoClose: 2000,
    //     hideProgressBar: true,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     transition: Slide
    // });



    const MyCard = ({ item, ingredients, price, _id }) => (
        <Card>
            <Card.Header><strong>{item}</strong></Card.Header>
            <Card.Body>
                <Card.Text>{ingredients}</Card.Text>
            </Card.Body>

            <Card.Footer>
                <Row>
                    <Col>
                        <Card.Text className="priceLeft"><strong>${price}</strong></Card.Text>
                    </Col>
                    <Col>
                        <Button id={_id} className="modalButtons" size="sm" variant="dark" onClick={() => {
                            setModalTitle(item)
                            setModalDesc(ingredients)
                            setModalShow(true)
                        }} >
                            +Add
                        </Button>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )


    const HeaderSection = () => (
        <Container className="maxContainerWidth mt-4">
            <div className="divStyle">

                <h1 className="responsiveText"><strong>Menu</strong></h1>

                <Form>
                    <FormControl type="text" placeholder="Search Menu" className="mr-sm-2 centerText regularInput responsiveInput" name="search" onChange={handleInputChange} />
                </Form>

                <Link to="/takeOrder"><Button variant="outline-dark" className="my-2 my-lg-0 formControl add addNewTableButton regularButton responsiveButton menuButton">Add Items To New Seat</Button></Link>

                <Link to="/viewTables"><Button variant="outline-dark" className="my-2 my-lg-0 formControl add addNewTableButton regularButton responsiveButton">Complete Order</Button></Link>

            </div>
        </Container>
    )


    return (
        <>
            {/* <ToastContainer className="toastContainer" /> */}

            <HeaderSection />

            {/* Looping over the filtered Search Terms ################################################################## */}
            <Container className={search.length === 0 ? "d-none maxContainerWidth" : "d-block maxContainerWidth"}>

                <div>

                    {filteredArrayOfFood.map(item =>
                        <MyCard
                            key={item._id}
                            item={item.item}
                            ingredients={item.ingredients}
                            price={item.price}
                            _id={item._id}
                        />
                    )}

                    <OrderModal
                        show={modalShow}
                        onHide={() => setModalShow(false)} />

                </div>
            </Container >


            {isLoading && "Loading..."}


            {!isLoading && isLoaded &&
                <>

                    <Container className="maxContainerWidth">

                        <h3>Small Plates</h3>

                        <div>
                            {smallPlates.map(item =>
                                <MyCard
                                    key={item._id}
                                    item={item.item}
                                    ingredients={item.ingredients}
                                    price={item.price}
                                    _id={item._id}
                                />
                            )}

                            <OrderModal
                                show={modalShow2}
                                onHide={() => setModalShow2(false)} />

                        </div>
                    </Container>


                    <Container className="maxContainerWidth">

                        <h3>Shared Plates</h3>

                        <div>
                            {sharedPlates.map(item =>
                                <MyCard
                                    key={item._id}
                                    item={item.item}
                                    ingredients={item.ingredients}
                                    price={item.price}
                                    _id={item._id}
                                />
                            )}

                            <OrderModal
                                show={modalShow3}
                                onHide={() => setModalShow3(false)} />

                        </div>
                    </Container>

                    <Container className="maxContainerWidth">

                        <h3>Main Courses</h3>

                        <div>
                            {mainCourse.map(item =>
                                <MyCard
                                    key={item._id}
                                    item={item.item}
                                    ingredients={item.ingredients}
                                    price={item.price}
                                    _id={item._id}
                                />
                            )}

                            <OrderModal
                                show={modalShow4}
                                onHide={() => setModalShow4(false)} />

                        </div>
                    </Container>


                    <Container className="maxContainerWidth">

                        <h3>Dessert</h3>

                        <div>
                            {dessert.map(item =>
                                <MyCard
                                    key={item._id}
                                    item={item.item}
                                    ingredients={item.ingredients}
                                    price={item.price}
                                    _id={item._id}
                                />
                            )}

                            <OrderModal
                                show={modalShow5}
                                onHide={() => setModalShow5(false)} />

                        </div>
                    </Container>

                </>
            }
        </>
    );

};


