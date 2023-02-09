import { useState, useEffect } from "react";
import API from "../../../utils/API";
import { Button, Modal } from "react-bootstrap";

export default function OrderModal(props) {


  

    const [items, setItems] = useState([])
    const [modalObj, setModalObj] = useState({
        table: "",
        order: "",
        course: 0,
        allergies: [],
        extra_notes: "",
        label: "labelValue",
        waiterId: "userId",
        username: "username"

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

   

 
    


    function handleFormSubmit(event) {
        event.preventDefault();


        console.log(modalObj);
      
        API.saveOrders(modalObj).then(res => {
            console.log(res.data);
            props.onHide();
        })
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
                    +Order Details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3>ttile</h3>
                <p>description </p>

                <hr />

                <p className="card-text"><small className="text-muted"><strong>Course Number (If Applicable):</strong></small></p>


            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark"
                    className="modalButtons"
                    onClick={() => { handleFormSubmit(event); notify() }}>
                    +Add Item </Button>
            </Modal.Footer>
        </Modal>
    );

}
