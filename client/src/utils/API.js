import axios from "axios";

export default {
  // Gets all items
  getMenus: function() {
    return axios.get("/api/menus");
  },
  // Gets the item with the given id
  getMenu: function(id) {
    return axios.get("/api/menus/" + id );
  },
  
  // Deletes the item with the given id
  deleteMenu: function(id) {
    return axios.delete("/api/menus/" + id);
  },
  // Saves a item to the database
  saveMenu: function(menuData) {
    return axios.post("/api/menus", menuData);
  }
};

