import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import "./ImportMenu.css";

import { Container, Jumbotron, Form, Button } from "react-bootstrap";



function ImportMenuComp() {
  
  const [items, setItems] = useState([])
    const [menuObj, setMenuObj] = useState({})
  
  
        let smallPlates = items.filter(item => {
         return item.section === "Small Plates"}).map(item => {
           return [item.item, item.price, item.ingredients];
         })
         let sharedPlates = items.filter(item => {
          return item.section === "Shared Plates"}).map(item => {
            return [item.item, item.price, item.ingredients];
          })
          let mainCourse = items.filter(item => {
            return item.section === "Main Course"}).map(item => {
              return [item.item, item.price, item.ingredients];
            })
          let dessert = items.filter(item => {
              return item.section === "Dessert"}).map(item => {
              return [item.item, item.price, item.ingredients];
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
  
    // Deletes a menu item from the database with a given id, then reloads menu items from the db
    function deleteItem(id) {
      API.deleteMenu(id)
        .then(res => loadItems())
        .catch(err => console.log(err));
    }
  
    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
      const { name, value } = event.target;
      setMenuObj({...menuObj, [name]: value})
    };
  
    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleFormSubmit(event) {
      event.preventDefault();
      
      if (menuObj.item && menuObj.price && menuObj.ingredients && menuObj.section ) {
        API.saveMenu({
          item: menuObj.item,
          price: menuObj.price,
          ingredients: menuObj.ingredients,
          section: menuObj.section
  
        })
          .then(res => loadItems())
          .catch(err => console.log(err));
      }
    };


    return (

        <>

            <br />
            <br />
            <Container className="vertical-center">

                <Jumbotron className="importMenuJumbotron" >
                    <h2 className=" text-center responsiveH2Font">Import Menu Item</h2>
                    <hr style={{ height: '4px', maxWidth: 375 }} />
                    {/* <h3 className="text-center">Plaeholder Description</h3> */}
                    <h6 className="text-center text-muted">Fill out the fields below to create a new menu item.</h6>

                    <Form className="menuImport">

                        <Form.Group className="formControl">
                            <h6>Enter Dish Name (Required): </h6>
                            <Form.Control className="formControl" placeholder="Dish Name"
                            onChange={handleInputChange}
                            name="item" />
                        </Form.Group>

                        <Form.Group className="formControl">
                            <h6>Enter Dish Price (Required): </h6>
                            <Form.Control className="formControl" placeholder="$ Cost" 
                             onChange={handleInputChange}
                             name="price"/>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1" className="formControl">
                            <h6>List Dish Info + Ingredients (Required): </h6>
                            <Form.Control as="textarea" rows={3} onChange={handleInputChange}
                  name="ingredients"/>
                        </Form.Group>

                        <Form.Group className="formControl">
                            <h6>Select Dish Category: </h6>
                            <Form.Control as="select" className="formControl" onChange={handleInputChange}
                            name="section"
                            >
                                <option></option>
                                <option>Small Plates</option>
                                <option>Shared Plates</option>
                                <option>Main Course</option>
                                <option>Dessert</option>
                               
                            </Form.Control>
                        </Form.Group>

                        <Button className="my-2 my-sm-0 formControl importMenuButton" block 
                  disabled={!(menuObj.price && menuObj.ingredients && menuObj.item && menuObj.section )}
                  onClick={handleFormSubmit} >+Add Menu Item</Button>
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



