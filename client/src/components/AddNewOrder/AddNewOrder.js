import React, { useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./AddNewOrder.css";


function AddNewOrderComp() {
    const [value, setValue] = React.useState('');

    React.useEffect(() => {
        localStorage.setItem("Label", value)
    }, [value]);

    const onChange = event => setValue(event.target.value);
    return (


        <>
            <Container className="vertical-center">

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />


                <div className="divAddOrder">
                    <h2 className="text-center responsiveH2Font">Add Seat</h2>
                    <hr style={{ height: '4px' }} />
                    {/* <h4 className="text-center">Plaeholder Description</h4> */}
                    {/* <h6 className="text-center text-muted">Placeholder Text </h6> */}

                    <Form>

                        <Form.Group className="formControl">

                            <h6 className="centerText">Enter Seat Description:</h6>

                            <Form.Control className="formControl centerTextAddLabel" autocomplete="off" placeholder="Seat Name/Number" value={value} type="text" onChange={onChange} />
                        </Form.Group>

                       
                        <a href="/menu"><Button variant="outline-dark" className="my-2 my-lg-0 formControl add addNewButton">+</Button></a>

                        <br />

                    </Form>

                </div>


            </Container>

            <br />
            <br />
            <br />

        </>


    );

};

export default AddNewOrderComp;