import axios from "axios";

export default {


  // =================
  // Menus
  // =================

  // Gets all items
  getMenus: function () {
    return axios.get("/api/menus");
  },
  // Gets the item with the given id
  // getMenu: function(id) {
  //   return axios.get("/api/menus/" + id );
  // },

  // Deletes the item with the given id
  deleteMenu: function (id) {
    return axios.delete("/api/menus/" + id);
  },
  // Saves a item to the database
  saveMenu: function (menuData) {
    return axios.post("/api/menus", menuData);
  },

  // =================
  // Orders
  // =================

  getOrders: function () {
    return axios.get("/api/orders");
  },
  // Gets the item with the given id
  getOrder: function (id) {
    return axios.get("/api/orders/" + id);
  },
  // Deletes the item with the given id
  deleteOrders: function (id) {
    return axios.delete("/api/orders/" + id);
  },
  // Saves a item to the database
  saveOrders: function (ordersData) {
    console.log(ordersData, "ordersData")
    return axios.post("/api/orders", ordersData);
  },


  // =================
  // Tables
  // =================

  //Route for deleting an entire table of orders
  deleteTable: function (id) {
    return axios.delete("/api/table/" + id)
  },




  // =================
  // Auth
  // =================

  getUser: function () {
    return axios.get("/user")
  },
  // Route for logging user out
  logoutUser: function (id) {
    return axios.get("/api/logout")
  },
  login: function (loginData) {
    console.log('logging in !!')
    return axios.post("/api/login", loginData, { withCredentials: true })
  },



};

