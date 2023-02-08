import React, { useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AddNewTable.css";


function AddNewTableComp() {
    const [value, setValue] = React.useState('');

    useEffect(() => {
        localStorage.setItem("TableNumber", value)
    }, [value]);

    const onChange = event => setValue(event.target.value);

    // const addTableSubmit = event => {
    //     event.preventDefault();
    //     console.log(value)
    //     // localStorage.setItem("TableNumber", value)
    // }



    return (
        <>
            <Container className="vertical-center">

                <div className="divAddTable">
                    <h2 className="text-center responsiveH2Font">Add Table</h2>
                    <hr style={{ height: '4px' }} />

                    <Form className="addTableForm">
                        <Form.Group className="formControl">
                            <h6 className="centerText">Enter your table:</h6>
                            <Form.Control className="formControl centerTextAddTable" autocomplete="off" placeholder="Enter Number" value={value} type="number" onChange={onChange} />
                        </Form.Group>

                        {/* <Form.Group>
                            <Form.Control className="formControl" placeholder="# How many available seats?" />
                        </Form.Group> */}

                        <Link to="/takeOrder">
                            <Button variant="outline-dark" className="my-2 my-lg-0 formControl add addNewTableButton" block disabled={!(value)}>+</Button>
                        </Link>

                    </Form>

                </div>

            </Container>
        </>
    );

};

export default AddNewTableComp;