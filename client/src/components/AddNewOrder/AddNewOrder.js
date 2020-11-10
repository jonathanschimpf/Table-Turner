import React, {useEffect} from "react";
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


                <Jumbotron className="jumbotronAddTable">
                    <h2 className="text-center responsiveH2Font">Add An Order</h2>
                    <hr style={{ height: '4px' }} />
                    {/* <h4 className="text-center">Plaeholder Description</h4> */}
                    {/* <h6 className="text-center text-muted">Placeholder Text </h6> */}

                    <Form>

                        <Form.Group className="formControl">

                            <h6 className="centerText"></h6>

                            <Form.Control className="formControl" placeholder="(Optional) Order Label" value={value} type="text" onChange={onChange} />
                        </Form.Group>

                        <Button className="my-2 my-lg-0 formControl add" block>+</Button>

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