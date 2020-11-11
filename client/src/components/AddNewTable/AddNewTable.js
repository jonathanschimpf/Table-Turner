import React, { useEffect } from "react";
import { Container, Jumbotron, Form, Button } from "react-bootstrap";
import "./AddNewTable.css";
import { Link, useLocation } from "react-router-dom";


function AddNewTableComp() {
    const [value, setValue] = React.useState('');
    
    React.useEffect(() => {
    localStorage.setItem("TableNumber", value)
    }, [value]);

    const onChange = event => setValue(event.target.value);

    const addTableSubmit = event => {
        event.preventDefault();
        console.log(value)
        // localStorage.setItem("TableNumber", value)

    }


    return (


        <>
            <Container className="vertical-center">

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />


                <Jumbotron className="jumbotronAddTable">
                    <h2 className="text-center responsiveH2Font">Add Table</h2>
                    <hr style={{ height: '4px' }} />
                    {/* <h4 className="text-center">Plaeholder Description</h4> */}
                    {/* <h6 className="text-center text-muted">Placeholder Text </h6> */}

                    <Form className="addTableForm">

                        <Form.Group className="formControl">

                            <h6 className="centerText">Define your table + Number of Seats</h6>

                            <Form.Control className="formControl centerTextAddTable" placeholder="# What table number is this?" value={value} type="text" onChange={onChange}/>
                        </Form.Group>

                        {/* <Form.Group>
                            <Form.Control className="formControl" placeholder="# How many available seats?" />
                        </Form.Group> */}

                        
                    <a href="/takeOrder"><Button variant="outline-dark" className="my-2 my-lg-0 formControl add addNewTableButton" block>+</Button></a>

                    </Form>

                </Jumbotron>

            </Container>

            <br />
            <br />
            <br />


        </>


    );

};

export default AddNewTableComp;