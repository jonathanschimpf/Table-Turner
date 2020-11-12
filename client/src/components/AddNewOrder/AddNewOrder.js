import React, { useEffect } from "react";
import { Container, Jumbotron, Form, Button } from "react-bootstrap";
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


                <Jumbotron className="jumbotronAddOrder">
                    <h2 className="text-center responsiveH2Font">Add Order To Seat</h2>
                    <hr style={{ height: '4px' }} />
                    {/* <h4 className="text-center">Plaeholder Description</h4> */}
                    {/* <h6 className="text-center text-muted">Placeholder Text </h6> */}

                    <Form>

                        <Form.Group className="formControl">

                            <h6 className="centerText">Memorably Define This Order</h6>

                            <Form.Control className="formControl centerTextAddLabel" placeholder="(Optional) Seat Name/Number" value={value} type="text" onChange={onChange} />
                        </Form.Group>

                       
                        <a href="/menu"><Button variant="outline-dark" className="my-2 my-lg-0 formControl add addNewButton" block>+</Button></a>

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

export default AddNewOrderComp;