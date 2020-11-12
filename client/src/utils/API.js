import axios from "axios";

export default {
  // Gets all items
  getMenus: function() {
    return axios.get("/api/menus");
  },
  // Gets the item with the given id
  // getMenu: function(id) {
  //   return axios.get("/api/menus/" + id );
  // },
  
  // Deletes the item with the given id
  deleteMenu: function(id) {
    return axios.delete("/api/menus/" + id);
  },
  // Saves a item to the database
  saveMenu: function(menuData) {
    return axios.post("/api/menus", menuData);
  },
  getOrders: function() {
    return axios.get("/api/orders");
  },
  // Gets the item with the given id
  getOrder: function(id) {
    return axios.get("/api/orders/" + id);
  },
  // Deletes the item with the given id
  deleteOrders: function(id) {
    return axios.delete("/api/orders/" + id);
  },
  // Saves a item to the database
  saveOrders: function(ordersData) {
    return axios.post("/api/orders", ordersData);
  },


  //Route for deleting an entire table of orders
  deleteTable: function(id){
    return axios.delete("/api/table/" + id)
  },


  getUser: function(){
    return axios.get("/user")
  },
  // Route for logging user out
  logoutUser: function(id){
    return axios.get("/logout")
  },
 
  
  
};

