const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    menu_item: String,
    ingredients: String,
})


const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;