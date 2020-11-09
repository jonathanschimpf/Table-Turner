import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";


function Menus() {
    // Setting our component's initial state
    const [items, setItems] = useState([])
    const [menuObj, setMenuObj] = useState({})
  
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
      
      if (menuObj.item && menuObj.price && menuObj.ingredients && menuObj.info && menuObj.section ) {
        API.saveMenu({
          item: menuObj.item,
          price: menuObj.price,
          ingredients: menuObj.ingredients,
          info: menuObj.info,
          section: menuObj.section
  
        })
          .then(res => loadItems())
          .catch(err => console.log(err));
      }
    };
  
      return (
        
          <>
            <h1>Add Menu Item</h1>
            
              <form>
                <input
                  onChange={handleInputChange}
                  name="item"
                  placeholder="Menu item (required)"
                />
                <input
                  onChange={handleInputChange}
                  name="price"
                  placeholder="Price (required)"
                />
                <textarea
                  onChange={handleInputChange}
                  name="ingredients"
                  placeholder="ingredients"
                />
                <textarea
                  onChange={handleInputChange}
                  name="info"
                  placeholder="info"
                />
                <Form.Control 
                onChange={handleInputChange}
                name="section"
                as="select" 
                multiple>
                  <option>Small Plates</option>
                  <option>Shared Plates</option>
                  <option>Main Course</option>
                  <option>Dessert</option>                
                </Form.Control>
                <button
                
                  disabled={!(menuObj.info && menuObj.price && menuObj.ingredients && menuObj.item && menuObj.section)}
                  onClick={handleFormSubmit}
                >
                  Add new Item
                </button>
              </form>
          
            
                <h1>New Menu Items</h1>
            
              {items.length ? (
                <ul>
                  {items.map(item => (
                    <li key={item._id}>
                      <Link to={"/menus/" + item._id}>
                        <strong>
                          {item.item} $ {item.price}
                        </strong>
                      </Link>
                      <button  onClick={() => deleteItem(item._id)} >Delete</button>
                    </li>
                  ))}
                </ul>
              ) : (
                <h3>No Results to Display</h3>
              )}
              </>
            
      );
    }
  
  
  export default Menus;
  