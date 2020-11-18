import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import "./ImportMenu.css";

import { Container, Jumbotron, Form, Button,Modal, Table } from "react-bootstrap";

import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


 // this function is for the table order details modal
 function MyVerticallyCenteredModal(props) {

  const [items, setItems] = useState([])
  const [menuObj, setMenuObj] = useState({})

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

      let smallPlates = items.filter(item => {
       return item.section === "Small Plates"}).map(item => {
         return {item: item.item, price: item.price, ingredients: item.ingredients, id: item._id};
       })
       let sharedPlates = items.filter(item => {
        return item.section === "Shared Plates"}).map(item => {
          return {item: item.item, price: item.price, ingredients: item.ingredients, id: item._id};
        })
        let mainCourse = items.filter(item => {
          return item.section === "Main Course"}).map(item => {
            return {item: item.item, price: item.price, ingredients: item.ingredients, id: item._id};
          })
        let dessert = items.filter(item => {
            return item.section === "Dessert"}).map(item => {
            return {item: item.item, price: item.price, ingredients: item.ingredients, id: item._id};
            })
        
       
            const deleteMenuItem = (id) => {
              console.log("delete button clicked");
              console.log(id, "id");
              API.deleteMenu(id).then(console.log("Menu Item has been deleted"))
      
              .then(res => loadItems())
              .catch(err => console.log(err));
      
      
              
          }


  return (

    <>

      <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
      >
          <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                 All Menu Items
        </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <p className="card-text"><small className="text-muted"><strong>Order Details</strong></small></p>
              <Table responsive className="tableBlackGround" size="sm" striped bordered hover variant="dark">
                  <thead>
                      
                      <tr>
                          <th>Menu Item</th>
                          <th>Ingredients</th>
                          <th>Price</th>
                          <th className="deleteFont">Delete</th>
                      </tr>
                      
                  </thead>
                  <tbody>
                    <tr>
                      <th className="tableRowCategoryTreatment">‏‏Small Plates</th>
                      <th className="tableRowCategoryTreatment"></th>
                      <th className="tableRowCategoryTreatment"></th>
                      <th className="tableRowCategoryTreatment"></th>
                      </tr>
                  {smallPlates.map(item => {
                       return <tr>

                          <td>{item.item}</td>
                          <td>{item.ingredients}</td>
                          <td>{item.price}</td>
                          <td className="removeRow" onClick={()=> deleteMenuItem(item.id)}><strong>x</strong></td>

                       </tr>
                  })}
                  <tr>
                  <th className="tableRowCategoryTreatment">‏‏‎Shared Plates</th>
                  <th className="tableRowCategoryTreatment"></th>
                  <th className="tableRowCategoryTreatment"></th>
                  <th className="tableRowCategoryTreatment"></th>
                  </tr>

                  {sharedPlates.map(item =>{
                      return  <tr>

                          <td>{item.item}</td>
                          <td>{item.ingredients}</td>
                          <td>{item.price}</td>
                          <td className="removeRow" onClick={()=> deleteMenuItem(item.id)}><strong>x</strong></td>

                       </tr>
 })}
                  <tr>
                  <th className="tableRowCategoryTreatment">‏‏‎‎‎Main Course</th>
                  <th className="tableRowCategoryTreatment"></th>
                  <th className="tableRowCategoryTreatment"></th>
                  <th className="tableRowCategoryTreatment"></th>
                  </tr>
                  {mainCourse.map(item =>{
                      return  <tr>

                          <td>{item.item}</td>
                          <td>{item.ingredients}</td>
                          <td>{item.price}</td>
                          <td className="removeRow" onClick={()=> deleteMenuItem(item.id)}><strong>x</strong></td>

                       </tr>
  })}  
                  <tr>
                  <th className="tableRowCategoryTreatment">‏‏‏‏‎Dessert</th>
                                    <th className="tableRowCategoryTreatment"></th>
                  <th className="tableRowCategoryTreatment"></th>
                  <th className="tableRowCategoryTreatment"></th>
                  </tr> 
                  {dessert.map(item => {
                       return <tr>

                          <td>{item.item}</td>
                          <td>{item.ingredients}</td>
                          <td>{item.price}</td>
                          <td className="removeRow" onClick={()=> deleteMenuItem(item.id)}><strong>x</strong></td>

                       </tr>
 })} 
                  </tbody>
              </Table>

              <p className="card-text"><small className="text-muted"><strong></strong></small></p>



          </Modal.Body>
          <Modal.Footer>
             <br/>
          </Modal.Footer>
      </Modal>
      </>
  );
}

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
        .then(() => setMenuObj({
          item: "",
          price: "",
          ingredients: "",
          section: ""
        }))
          .then(()=> notify())
          .then(()=> loadItems())
          .catch(err => console.log(err));
          
      }
    };

    const [modalShow, setModalShow] = React.useState(false);


    
        // toast
        const notify = () => toast.dark(`${menuObj.item} Added!`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide
        });

    return (

      
        <>
            {/* Container for toast notification*/}
            <ToastContainer className="toastContainer"/>


          
            <br />
            <Container className="vertical-center">

                <Jumbotron className="importMenuJumbotron" >
                    <h2 className=" text-center responsiveH2Font">Import Menu Item</h2>
                    <hr style={{ height: '4px', maxWidth: 375 }} />
                    <h6 className="text-center text-muted">Fill out the fields below to create a new menu item.</h6>
                    <br/>
                    <Form className="menuImport">

                        <Form.Group className="formControl">
                            <h6>Enter Dish Name + Price + Ingredients (Required): </h6>
                            <Form.Control className="formControl" autocomplete="off" placeholder="Dish Name.."
                            onChange={handleInputChange}
                            name="item" 
                            value={menuObj.item}/>
                        </Form.Group>

                        <Form.Group className="formControl">
                            {/* <h6>Enter Dish Price (Required): </h6> */}
                            <Form.Control className="formControl" autocomplete="off" placeholder="Dish Price.." 
                             onChange={handleInputChange}
                             name="price"
                             value={menuObj.price}
                             type="number"/>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1" className="formControl">
                            {/* <h6>List Dish Info + Ingredients (Required): </h6> */}
                            <Form.Control as="textarea" className="dishInfoHeight" autocomplete="off" placeholder="Dish Info + Ingredients.." rows={3} onChange={handleInputChange}
                  name="ingredients"
                  value={menuObj.ingredients}/>
                        </Form.Group>

                        <Form.Group className="formControl">
                            <h6>Select Dish Category (Required): </h6>
                            <Form.Control as="select" className="formControl" autocomplete="off" onChange={handleInputChange}
                            name="section"
                            value={menuObj.section}
                            >
                                <option></option>
                                <option>Small Plates</option>
                                <option>Shared Plates</option>
                                <option>Main Course</option>
                                <option>Dessert</option>
                               
                            </Form.Control>
                        </Form.Group>

                        <Button variant="outline-dark" className="my-2 my-sm-0 formControl importMenuButton" block 
                  disabled={!(menuObj.price && menuObj.ingredients && menuObj.item && menuObj.section )}
                  onClick={()=> handleFormSubmit(event)} >+Add Menu Item</Button>

                  <br/>

                        <Button variant="outline-dark" className="my-2 my-lg-0 formControl view viewDeleteMenuButtons" size="sm" variant="outline-danger" onClick={() => {
    
                                 setModalShow(true)
                                 
                                 }} block>View / Delete Menu Items</Button>
                        
                    </Form>

                </Jumbotron>

                <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)} />

            </Container>
            <br />
            <br />
            
          

              </>

       
    );
};

export default ImportMenuComp;



