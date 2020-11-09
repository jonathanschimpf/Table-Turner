import React from "react";
import "./ImportMenu.css";

import { Container, Jumbotron, Form, Button } from "react-bootstrap";



function ImportMenuComp() {



    return (

        <>

            <br />
            <br />
            <Container className="vertical-center">

                <Jumbotron className="jumbotronLoginSignUp" >
                    <h2 className=" text-center responsiveH2Font">Import Menu Item</h2>
                    <hr style={{ height: '4px', maxWidth: 375 }} />
                    {/* <h3 className="text-center">Plaeholder Description</h3> */}
                    <h6 className="text-center text-muted">Fill out the fields below to create a new menu item.</h6>

                    <Form className="menuImport">

                        <Form.Group className="formControl">
                            <h6>Enter Dish Name (Required): </h6>
                            <Form.Control className="formControl" placeholder="Dish Name" />
                        </Form.Group>

                        <Form.Group className="formControl">
                            <h6>Enter Dish Price (Required): </h6>
                            <Form.Control className="formControl" placeholder="$ Cost" />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1" className="formControl">
                            <h6>List Dish Info + Ingredients (Required): </h6>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <Form.Group className="formControl">
                            <h6>Select Dish Category: </h6>
                            <Form.Control as="select" className="formControl">
                                <option>Small Plates</option>
                                <option>Shared Plates</option>
                                <option>Main Course</option>
                                <option>Dessert</option>
                            </Form.Control>
                        </Form.Group>

                        <Button className="my-2 my-sm-0 formControl" block>+Add Menu Item</Button>
                        <br />

                    </Form>

                </Jumbotron>

            </Container>
            <br />
            <br />
            <br />


        </>
    );
};

export default ImportMenuComp;



